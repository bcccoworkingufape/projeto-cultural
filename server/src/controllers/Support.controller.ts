import { NextFunction, Request, Response } from 'express';
import * as SupportRepository from '../database/repositories/Support.repository';

export const support = async (req: Request, res: Response, next: NextFunction) => {
	try {
	const userid = await req.body.user_id;
	const projectid = await req.body.project_id;
	if (!!!userid) res.status(400).send({ message: 'The request has failed: User does not exists.' });
		if (!!!projectid) res.status(400).send({ message: 'The request has failed: Project does not exists.' });
		else {
			const like = await SupportRepository.create({
				...req.body
			});
		}
	} catch (error: any) {
		res.status(400).send({ message: 'The request has failed: ' + error });
	}
};


