
import { Project } from './../database/entities/Project.entity';
import { User } from './../database/entities/User.entity';

export interface NotificationType {
    project: Project;
    notificator: User;
    type: 'support' | 'like';
}