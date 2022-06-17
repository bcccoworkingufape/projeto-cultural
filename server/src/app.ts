import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

export const app = express();

app.use(cors({
    origin: 'http://localhost:3000', 
    exposedHeaders: ['Authorization']
}));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
