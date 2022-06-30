import { NextFunction, Request, Response } from 'express';
import * as userRepository from '../database/repositories/user-repository';


export const create = async (req: Request, res: Response, next: NextFunction) => {
    try {
        if (!!(await userRepository.getByEmail(req.body.email))) throw new Error("User already signed up");
        else {
            const user = await userRepository.create(req.body);
            res.status(200).send(user);
        }
    } catch (error: any) {
        res.status(400).send({ message: 'The request has failed: ' + error });
    }
};

export const login = async (req: Request, res: Response, next: NextFunction) => {
    const user = await userRepository.getByEmail(req.body.email);
    try {
        if (!!!user) res.status(400).send({ message: 'The request has failed: User is not signed up' });
        else {
            if (user.email == req.body.email && user.password == req.body.password) res.status(200).send(user);
            else res.status(400).send({ message: 'The request has failed: The login information does not match' });
        }
    } catch (error: any) {
        res.status(400).send({ message: 'The request has failed: ' + error });
    }
};