import { AppDataSource as database } from '../../../ormconfig';

export const getNotificationsByUser = async (userId: string) => {
    return await database.query(`
        SELECT users.name as user_name, projects.name as project_name, likes."createdAt", 'like' as table_name
        FROM likes
        INNER JOIN projects ON likes.project_id = projects.id
        INNER JOIN users ON users.id = likes.user_id
        WHERE projects.user_id = '${userId}'
        UNION ALL 
        SELECT users.name as user_name, projects.name as project_name, supports."createdAt", 'support' as table_name
        FROM supports
        INNER JOIN projects ON supports.project_id = projects.id
        INNER JOIN users ON users.id = supports.user_id
        WHERE projects.user_id = '${userId}'
        ORDER BY "createdAt" DESC;
    `)
        
}