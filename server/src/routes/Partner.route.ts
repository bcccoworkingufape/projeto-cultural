import express from 'express';
import * as partnerController from '../controllers/Partner.controller';
export const router = express.Router();

router.post('/new', partnerController.create);
router.get('/:id', partnerController.show);
// router.delete('/:id', partnerController.destroy);