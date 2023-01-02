import * as functions from 'firebase-functions';
import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';
import "reflect-metadata";

import createConnection from '../../src/database/index';

import { router as userRouter } from '../../src/routes/User.route';
import { router as likeRouter } from '../../src/routes/Like.route';
import { router as supportRouter } from '../../src/routes/Support.route';
import { router as projectRouter } from '../../src/routes/Project.route';

dotenv.config();

const app = express();
createConnection();

app.use(cors({
    origin: 'http://localhost:3000', 
    exposedHeaders: ['Authorization']
}));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.status(200).send('API - PYRE')
})

app.use('/users', userRouter);
app.use('/likes', likeRouter);
app.use('/supports', supportRouter);
app.use('/projects', projectRouter);

export const api = functions.https.onRequest(app);