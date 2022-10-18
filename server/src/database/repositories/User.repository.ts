import { AppDataSource as database } from '../../../ormconfig'; 
import { User } from '../entities/User.entity';

const repository = database.getRepository(User);

export const create = async(data: any) => {
    let user = new User();

    user.email = data.email;
    user.password = data.password;
    user.user_type = data.user_type;
    user.imageURL = data.imageURL;

    return await repository.save(user);
};

export const getByEmail = async(email: string) => {
    return await repository.findOneBy({ email: email });
};

export const deleteUser = async(email: any) => {
    return await repository.
	createQueryBuilder()
    	.delete()
	.from(User)
	.where({email: email.email})
	.execute()
    
}
