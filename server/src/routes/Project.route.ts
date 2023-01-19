import express from 'express';
import * as projectController from '../controllers/Project.controller';
export const router = express.Router();

router.post('/createProject', projectController.create);
router.post('/deleteProject', projectController.remove);
