import express from 'express';
import * as likeController from '../controllers/Like.controller';
export const router = express.Router();

router.post('/like', likeController.like);
router.post('/removelike', likeController.removeLike);

