import express from 'express';
import { loginUser } from '../controllers/authController';
import registerHandler from '../api/register';

const router = express.Router();


router.post('/login', loginUser);


router.post('/register', registerHandler);

export default router;
