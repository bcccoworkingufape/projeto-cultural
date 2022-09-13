import { AppDataSource as database } from '../../../ormconfig'; 
import { Support } from '../entities/Support.entity';

const repository = database.getRepository(Support);

export const create = async(data: any) => {
    let support = new Support();

    support.user_id = data.user_id;
    support.project_id = data.project_id;

    return await repository.save(support);
};


