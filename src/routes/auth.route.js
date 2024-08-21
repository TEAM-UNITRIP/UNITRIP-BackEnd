import express from 'express';
import { logInKakao, authCallback } from '../controllers/auth.controller.js';

export const router = express.Router();

router.get('/login', logInKakao);
router.get('/callback', authCallback);