import { AppDataSource as database } from '../../../ormconfig'; 
import { Project } from '../entities/Project.entity';
import { CustomRepositoryCannotInheritRepositoryError } from 'typeorm';

const repository = database.getRepository(Project);

export const create = async(data: Project) => {
    let project = new Project();

    project.name = data.name;
    project.description = data.description;
    project.user_id = data.user_id;
    project.category_id = data.category_id;
    project.status = data.status;
    project.locality = data.locality;

    return await repository.save(project);
}

export const getByName = async(name: string) => {
    return await repository.findOneBy({ name });
}

export const getById = async(id: string) => {
    return await repository.findOneBy({ id });
}

export const update = async(id: string, projectData: Partial<Project>) => {
    return await repository.update({ id }, projectData);
}

export const deleteProject = async(id: string) => {
    return await repository.delete({ id })
}

export const getProjectsByUser = async (userId: string) => {
    return await repository.createQueryBuilder("projects")
    .innerJoinAndSelect("project.user", "user")
    .where("user.id = :userId", { userId })
    .getMany();
}