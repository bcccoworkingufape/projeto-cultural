
import { AppDataSource as database } from '../../../ormconfig'; 
import { User } from '../entities/User.entity';

const repository = database.getRepository(User);

export const create = async(data: any) => {
    let user = new User();

    user.email = data.email;
    user.password = data.password;

    return await repository.save(user);
};

export const getByEmail = async(email: string) => {
    return await repository.findOneBy({ email: email });
};