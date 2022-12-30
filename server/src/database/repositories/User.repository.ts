import { CustomRepositoryCannotInheritRepositoryError } from 'typeorm';
import { AppDataSource as database } from '../../../ormconfig'; 
import { User } from '../entities/User.entity';

const repository = database.getRepository(User);

export const create = async(data: any) => {
    let user = new User();

    user.email = data.email;
    user.name = data.name;
    user.password = data.password;
    user.user_type = data.user_type;
    user.imageURL = data.imageURL;

    return await repository.save(user);
};

export const getByEmail = async(email: string) => {
    return await repository.findOneBy({ email: email });
};

export const getByName = async(name: string) => {
	return await repository.findOneBy({ name: name});
};

export const getById = async(id: string) => {
    return await repository.findBy({ id });
}

export const updateUser = async(id: string, userData: Partial<User>) => {
    return await repository.update({ id }, userData);
}
 
export const deleteUser = async(email: any) => {
    return await repository.
	createQueryBuilder()
    	.delete()
	.from(User)
	.where({email: email.email})
	.execute()
};


export const getResetTokenByEmail = async(email: any) => {
    return await repository.createQueryBuilder('users')
    .where({ email })
    .select(['users.passwordResetToken', 'users.passwordResetExpiration'])
    .getOne();
};

export const updateResetPasswordToken = async(userId: any, token: any, tokenExpiration: any) => {
    return await repository.save( {
        id: userId, 
        passwordResetToken: token, 
        passwordResetExpiration: tokenExpiration
    })
};

export const updatePassword = async(userId: string, password: any) => {
    return await repository.save( {
        id: userId, 
        password
    })    
}