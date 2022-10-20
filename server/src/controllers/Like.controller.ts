import { NextFunction, Request, Response } from 'express';
import * as likeRepository from '../database/repositories/Like.repository';

export const like = async (req: Request, res: Response) => {
	try {
		const userid = await req.body.user_id;
		const projectid = await req.body.project_id;
		if (!!!userid) res.status(400).send({ message: 'The request has failed: User is not signed up' });
		if (!!!projectid) res.status(400).send({ message: 'The request has failed: Project does not exist.' });
		else {
			const like = await likeRepository.create({
				...req.body
			});
            		res.status(200).send({ like });
		}
	} catch (error: any) {
		res.status(400).send({ message: 'The request has failed: ' + error });
	}
};

export const remove = async (req: Request, res: Response) => {
	try {
		const userid = await req.body.user_id;
		const projectid = await req.body.project_id;
		if (!!!userid) res.status(400).send({ message: 'The request has failed: User is not signed up' });
		if (!!!projectid) res.status(400).send({ message: 'The request has failed: Project does not exist.' });
		else {
			const like = await likeRepository.deleteLike(
				{project_id: req.body.project_id},
				{user_id: req.body.user_id},
			);
            		res.status(200).send({ like });
		}
	} catch (error: any) {
		res.status(400).send({ message: 'The request has failed: ' + error });
	}
};
