
import dbConnect from '../db/ConnectDB';
import User from '../models/User';
import bcrypt from 'bcryptjs';

export default async function handler(req, res) {
    const { method } = req;

    await dbConnect();

    switch (method) {
        case 'POST':
            try {
                const { firstName, lastName, email, password } = req.body;


                const salt = await bcrypt.genSalt(10);
                const hashedPassword = await bcrypt.hash(password, salt);


                const newUser = await User.create({
                    firstName,
                    lastName,
                    email,
                    password: hashedPassword,
                });

                res.status(201).json({ success: true, data: newUser });
            } catch (error) {
                res.status(400).json({ success: false, error: error.message });
            }
            break;
        default:
            res.status(405).json({ success: false, message: 'Method Not Allowed' });
            break;
    }
}
