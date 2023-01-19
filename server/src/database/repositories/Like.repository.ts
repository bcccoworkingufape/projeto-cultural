import { AppDataSource as database } from '../../../ormconfig'; 
import { Like } from '../entities/Like.entity';
import { Any } from 'typeorm';

const repository = database.getRepository(Like);

export const create = async(data: any) => {
    let like = new Like();

    like.user_id = data.user_id;
    like.project_id = data.project_id;

    return await repository.save(like);
};

export const getByUserIdProjectId = async(data: any) => {
    return await repository.find({
	    where: {
		    user_id: data.user_id,
		    project_id: data.project_id,
	    },
    })
};

export const deleteLike = async(project_id: any, user_id: any) => {
	return await repository.
		createQueryBuilder()
	    	.delete()
		.from(Like)
		.where({user_id: user_id.user_id}, {project_id: project_id.project_id})
		.execute()
}

export const getLikesByProject = async (projectId: string) => {
    return await repository.createQueryBuilder("likes")
    .innerJoinAndSelect("likes.project", "project")
    .where("project.id = :projectId", { projectId })
    .getMany();
}

export const getLikesByListOfProjects = async (projectIds: string[]) => {
    const ids = Any(projectIds);

    return await repository.createQueryBuilder("likes")
    .where("project_id IN(:...ids)", { ids: ids })
    .getMany();
}
