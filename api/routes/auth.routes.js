import express from 'express';
import { postRegister, postLogin } from '../controllers/auth.controller.js';

export const authRouter = express.Router();

authRouter.post('/register', postRegister);
authRouter.post('/login', postLogin);
