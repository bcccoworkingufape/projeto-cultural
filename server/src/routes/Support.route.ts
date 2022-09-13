import express from 'express';
import * as SupportController from '../controllers/Support.controller';
export const router = express.Router();

router.post('/support', SupportController.support);
