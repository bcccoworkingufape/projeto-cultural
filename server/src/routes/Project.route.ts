import express from 'express';
import * as projectController from '../controllers/Project.controller';
export const router = express.Router();

router.post('/createproject', projectController.create);
router.post('/deleteproject', projectController.remove);
