import { AppDataSource as database } from '../../../ormconfig'; 
import { Project } from '../entities/Project.entity';

const repository = database.getRepository(Project);

export const create = async(data: any) => {
    let project = new Project();

    project.name = data.name;
    project.description = data.description;
    project.externalURL = data.externalURL;
    project.imageURL = data.imageURL;
    project.videoURL = data.videoURL;
    project.userId = data.userId;
    project.categories = data.categories;
    project.status = data.status;
    project.active = data.active;

    return await repository.save(project);
};

export const getByName = async(name: string) => {
    return await repository.findOneBy({ name: name });
};

