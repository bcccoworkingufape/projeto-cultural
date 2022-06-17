import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';
import createConnection from '../src/database/index';

import { router as userRouter } from './routes/user-route';

dotenv.config();

export const app = express();
createConnection();

app.use(cors({
    origin: 'http://localhost:3000', 
    exposedHeaders: ['Authorization']
}));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/users', userRouter);