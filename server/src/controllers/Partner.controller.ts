import { NextFunction, Request, Response } from 'express';
import * as partnerRepository from '../database/repositories/Partner.respository';

export const create = async (req: Request, res: Response, next: NextFunction) => {
    try {
        if (!!(await partnerRepository.getByTitle(req.body.title))) throw new Error("Title already exists");
        else {
            const partner = await partnerRepository.create({
                ...req.body
            });
            res.status(201).send({ message: req.body });
        }
        
    } catch (error: any) {
        res.status(400).send({ message: 'The request has failed: ' + error });
    }
}

export const show = async (req: Request, res: Response, next: NextFunction) => {
    try {
        
        const partner = await partnerRepository.getById(req.params.id)

        if (!!!(partner)) throw new Error("Title does not exist");
        else {
            res.status(200).send(partner);
        }
    } catch (error: any) {
        res.status(400).send({ message: 'The request has failed: ' + error });
    }
}

// export const destroy = async (req:Request, res: Response, next: NextFunction) => {
//     try {
//         const partner = await partnerRepository.getById(req.params.id)

//         if (!!!(partner)) throw new Error("Title does not exist");
//         else {
//             partnerRepository.destroy(req.params.id);
//             res.status(200).send({ message: "Partner successfully destroyed"});
//         }
        
//     } catch (error: any) {
//         res.status(400).send({ message: 'The request has failed: ' + error });
//     }
// }
