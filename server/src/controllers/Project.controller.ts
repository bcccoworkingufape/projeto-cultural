import { NextFunction, Request, Response } from 'express';
import * as projectRepository from '../database/repositories/Project.repository';
import { decodeLoginToken } from '../services/authService.service';


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

export const getById = async(req: Request, res: Response, nextFunction: NextFunction) => {
	try {
		const project = await projectRepository.getById(req.body.id);
		res.status(200).send({ project });
	} catch (error: any) {
		res.status(400).send({ message: 'The request has failed: ' + error });
	}
}

export const update = async(req: Request, res: Response, NextFunction: NextFunction) => {
	try {
		const project = await projectRepository.getById(req.body.id);
		const token = req.headers.authorization;
		const userId = (await decodeLoginToken(token)).id;

		if(project.userId === userId) {
			await projectRepository.update(req.body.id, req.body.projectData);
			res.status(200).send({ projectId: project.id })
		} 
		else res.status(401).send({ message: 'Unauthorized user' });
	} catch(error: any) {
		res.status(400).send({ message: 'The request has failed: ' + error });
	}
}

export const remove = async (req: Request, res: Response) => {
	try {
		if (!!!(await projectRepository.getById(req.body.id))) throw new Error("Non existent project");
		else {
			const project = await projectRepository.getById(req.body.id);
			const token = req.headers.authorization;
			const userId = (await decodeLoginToken(token)).id;

			if(project.userId === userId) {
				await projectRepository.deleteProject(req.body.id);
				res.status(200).send({ projectDeleted: req.body.id });
			} 
			else res.status(401).send({ message: 'Unauthorized user' }); 
		}
	} catch (error: any) {
		res.status(400).send({ message: 'The request has failed: ' + error });
	}
};


