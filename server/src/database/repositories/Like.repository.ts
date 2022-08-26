import { AppDataSource as database } from '../../../ormconfig'; 
import { Like } from '../entities/Like.entity';

const repository = database.getRepository(Like);

export const create = async(data: any) => {
    let like = new Like();

    like.user_id = data.user_id;
    like.project_id = data.project_id;

    return await repository.save(like);
};

