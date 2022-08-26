import { NextFunction, Request, Response } from 'express';
import * as likeRepository from '../database/repositories/Like.repository';

export const like = async (req: Request, res: Response, next: NextFunction) => {
	const userid = await req.body.user_id;
	const projectid = await req.body.project_id;
	try {
		if (!!!userid) res.status(400).send({ message: 'The request has failed: User is not signed up' });
		if (!!!projectid) res.status(400).send({ message: 'The request has failed: Project does not exist.' });
		else {
			const like = await likeRepository.create({
				...req.body
			});
		}
	} catch (error: any) {
		res.status(400).send({ message: 'The request has failed: ' + error });
	}
};

