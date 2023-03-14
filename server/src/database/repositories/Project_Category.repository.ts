import { AppDataSource as database } from '../../../ormconfig'; 
import { ProjectCategory } from '../entities/Project_Category.entity';


const repository = database.getRepository(ProjectCategory);

export const getCategories = async() => {
    return await repository.find();
};

