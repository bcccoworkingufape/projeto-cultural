import express from 'express';
import * as userController from '../controllers/User.controller';

export const router = express.Router();

router.post('/signup', userController.create);
router.post('/login', userController.login);
router.post('/deleteuser', userController.remove);
router.post('/forgotPassword', userController.forgotPassword)
router.post('/resetPassword', userController.resetPassword)
