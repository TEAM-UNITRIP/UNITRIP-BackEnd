import express from 'express';
import { authRouter } from './src/routes/auth.route.js';

const app = express();

// 라우터 세팅
app.use('/auth', authRouter);
