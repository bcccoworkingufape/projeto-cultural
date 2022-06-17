import express from 'express';
import * as userController from '../controllers/user-controller';
export const router = express.Router();

router.post('/signup', userController.create);
router.post('/login', userController.login);
