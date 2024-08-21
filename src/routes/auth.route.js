import express from 'express';
import { userController } from '../controllers/temp.controller.js';

export const router = express.Router();

router.post('/login', userController.logInKakao);