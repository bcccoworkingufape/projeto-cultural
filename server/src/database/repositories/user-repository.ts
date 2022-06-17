import { appDataSource } from '../data-source';
import { User } from '../entities/User';

const repository = appDataSource.getRepository(User);

export const create = async(data: any) => {
    let user = new User();

    user.email = data.email;
    user.password = data.password;
    user.type = data.type;
    user.active = true;

    return await repository.save(user);
};

export const getByEmail = async(email: string) => {
    return await repository.findOneBy({ email: email });
};
