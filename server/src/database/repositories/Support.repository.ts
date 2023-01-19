import { Any } from 'typeorm';
import { AppDataSource as database } from '../../../ormconfig'; 
import { Support } from '../entities/Support.entity';

const repository = database.getRepository(Support);

export const create = async(data: any) => {
    let support = new Support();

    support.user_id = data.user_id;
    support.project_id = data.project_id;

    return await repository.save(support);
};

export const getByUserIdProjectId = async(data: any) => {
    return await repository.find({
	    where: {
		    user_id: data.user_id,
		    project_id: data.project_id,
	    },
    })
};

export const deleteSupport = async(project_id: any, user_id: any) => {
	return await repository.
		createQueryBuilder()
	    	.delete()
		.from(Support)
		.where({user_id: user_id.user_id}, {project_id: project_id.project_id})
		.execute()
}

export const getSupportsByProject = async (projectId: string) => {
    return await repository.createQueryBuilder("supports")
    .innerJoinAndSelect("supports.project", "project")
    .where("project.id = :projectId", { projectId })
    .getMany();
}
export const getSupportsByListOfProjects = async (projectIds: string[]) => {
    const ids = Any(projectIds);

    return await repository.createQueryBuilder("likes")
    .where("project_id IN(:...ids)", { ids: ids })
    .getMany();
}
