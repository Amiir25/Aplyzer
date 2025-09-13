import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';

import authRouter from './routes/authRouter.js';
import userRouter from './routes/userRouter.js';

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());
app.use(cookieParser());

// Routes
app.use('/auth', authRouter);
app.use('/user', userRouter);

const port = process.env.PORT;
app.listen(port, () => {
    console.log(`Server is Listening on http://localhost:${port}`);
});