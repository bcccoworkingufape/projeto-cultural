import express from 'express';
import * as projectCategoryController from '../controllers/Project_Category';
export const router = express.Router();

router.get('/', projectCategoryController.getAll);

