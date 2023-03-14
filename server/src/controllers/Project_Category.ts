import { NextFunction, Request, Response } from 'express';
import { getCategories } from '../database/repositories/Project_Category.repository';


export const getAll = async(req: Request, res: Response, nextFunction: NextFunction) => {
	try {
		const categories = await getCategories();
		res.status(200).send({ categories });
	} catch (error: any) {
		res.status(400).send({ message: 'The request has failed: ' + error });
	}
}