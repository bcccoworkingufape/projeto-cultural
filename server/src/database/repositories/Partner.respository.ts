import { Partner } from "../entities/Partner.entity";
import { AppDataSource as database } from '../../../ormconfig';

const repository = database.getRepository(Partner);

export const create = async (data: any) => {
    let partner = new Partner();

    partner.title = data.title;
    partner.description = data.description;
    partner.url_image = data.url_image;

    return await repository.save(partner);
};

export const destroy = async (title: string) => {
    // let partner = getByTitle(title);

    // if(!!(await repository.findOneBy({title}))) throw new Error("Partner does not exists");
    // else{
        await repository.delete(title);
    // }
}

export const getByTitle = async (title:string) => {
    return await repository.findOneBy({ title:title });
};

export const getById = async (id:string) => {
    return await repository.findOneBy({ id:id });
};