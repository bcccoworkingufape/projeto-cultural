import { NextFunction, Request, Response } from 'express';
import * as projectRepository from '../database/repositories/Project.repository';

export const create = async (req: Request, res: Response, next: NextFunction) => {
	try {
		if (!!(await projectRepository.getByName(req.body.name))) throw new Error("Name already chosen");
		else {
			const project = await projectRepository.create({
				...req.body
			});
		}
	} catch (error: any) {
		res.status(400).send({ message: 'The request has failed: ' + error });
	}
};


