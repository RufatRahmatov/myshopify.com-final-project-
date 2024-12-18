const User = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.register = async (req, res) => {
    try {
        const { name, email, password, isAdmin } = req.body;

        if (!email || !password) {
            return res.status(400).json({ message: 'Email and password are required.' });
        }


        if (isAdmin) {
            const existingAdmin = await User.findOne({ isAdmin: true });
            if (existingAdmin) {
                return res.status(400).json({ message: 'An admin user already exists.' });
            }
        }


        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'Email already registered.' });
        }


        const hashedPassword = await bcrypt.hash(password, 10);


        const newUser = await User.create({ name, email, password: hashedPassword, isAdmin });


        const token = generateToken(newUser);

        res.status(201).json({
            user: {
                id: newUser._id,
                name: newUser.name || null,
                email: newUser.email,
                isAdmin: newUser.isAdmin,
            },
            token,
        });
    } catch (error) {
        res.status(500).json({ message: 'Error registering user', error: error.message });
    }
};

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;


        const user = await User.findOne({ email });
        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }


        const token = generateToken(user);


        const redirect = user.isAdmin ? '/dashboard' : '/home';

        res.status(200).json({
            user: {
                id: user._id,
                email: user.email,
                name: user.name || null,
                isAdmin: user.isAdmin,
            },
            token,
            redirect,
        });
    } catch (error) {
        res.status(500).json({ message: 'Error logging in', error: error.message });
    }
};

function generateToken(user) {
    return jwt.sign({ id: user._id, isAdmin: user.isAdmin }, process.env.JWT_SECRET, { expiresIn: '1h' });
}
