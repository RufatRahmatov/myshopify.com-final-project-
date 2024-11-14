
const User = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');




exports.register = async (req, res) => {
    try {
        const { name, email, password } = req.body;


        if (!email || !password) {
            return res.status(400).json({ message: 'Email and password are required.' });
        }


        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'Email already registered' });
        }


        const hashedPassword = await bcrypt.hash(password, 10);


        const newUser = await User.create({ name, email, password: hashedPassword });


        const token = generateToken(newUser);


        res.status(201).json({ user: { id: newUser._id, name: newUser.name || null, email: newUser.email }, token });
    } catch (error) {
        if (error.name === 'ValidationError') {
            return res.status(400).json({ message: 'Validation Error', error: error.message });
        }
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
        res.json({ user, token });
    } catch (error) {
        res.status(500).json({ message: 'Error logging in', error: error.message });
    }
};

function generateToken(user) {
    return jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
}