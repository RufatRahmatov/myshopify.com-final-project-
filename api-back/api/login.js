
import dbConnect from '../db/ConnectDB';
import User from '../models/User';
import bcrypt from 'bcryptjs';

export default async function handler(req, res) {
    const { method } = req;

    await dbConnect();

    if (method === 'POST') {
        const { email, password } = req.body;

        try {

            const user = await User.findOne({ email });
            if (!user) {
                return res.status(400).json({ success: false, message: 'Invalid email or password' });
            }


            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) {
                return res.status(400).json({ success: false, message: 'Invalid email or password' });
            }


            res.status(200).json({ success: true, user: { firstName: user.firstName, email: user.email } });
        } catch (error) {
            res.status(500).json({ success: false, message: 'Server error' });
        }
    } else {
        res.status(405).json({ success: false, message: 'Method Not Allowed' });
    }
}
