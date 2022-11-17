import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';

import createConnection from '../src/database/index';

import { router as userRouter } from './routes/User.route';
import { router as likeRouter } from './routes/Like.route';
import { router as supportRouter } from './routes/Support.route';
import { router as projectRouter } from './routes/Project.route';

import swaggerUi from 'swagger-ui-express';
import swaggerDocs from './swagger.json';

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
app.use('/likes', likeRouter);
app.use('/supports', supportRouter);
app.use('/projects', projectRouter);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
