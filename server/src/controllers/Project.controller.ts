import { NextFunction, Request, Response } from 'express';
import * as projectRepository from '../database/repositories/Project.repository';

export const create = async (req: Request, res: Response) => {
	try {
		if (!!(await projectRepository.getByName(req.body.name))) throw new Error("Name already chosen");
		else {
			const project = await projectRepository.create({
				...req.body
			});
            		res.status(200).send({ project });
		}
	} catch (error: any) {
		res.status(400).send({ message: 'The request has failed: ' + error });
	}
};

export const remove = async (req: Request, res: Response) => {
	try {
		if (!!!(await projectRepository.getByName(req.body.name))) throw new Error("Name could not be found");
		else {
			const project = await projectRepository.deleteProject({
				name: req.body.name
			});
            		res.status(200).send({ project });
		}
	} catch (error: any) {
		res.status(400).send({ message: 'The request has failed: ' + error });
	}
};


