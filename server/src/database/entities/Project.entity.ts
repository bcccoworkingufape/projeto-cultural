import { Entity, Column, CreateDateColumn, PrimaryColumn, ManyToMany, JoinTable, ManyToOne, OneToOne, JoinColumn, } from "typeorm";
import { v4 as uuid } from 'uuid';
import { StatusActive, StatusDelected } from "../../utils/enums.util";
import { ProjectCategory } from "./Project_Category.entity";
import { User } from './User.entity';

@Entity("projects")
export class Project {

    @PrimaryColumn({ type: String })
    id!: string;

    @Column({ type: String, name: "name"})
    name!: string;

    @Column({ type: String, name: "description"})
    description!: string;

    @Column({ type: String, name: "locality"})
    locality!: string;

    @Column({ type: 'uuid', name: "user_id", nullable: false })
    user_id!: string;

    @OneToOne(() => User, { cascade: true })
    @JoinColumn({ name: 'user_id' })
    user: User;
    
    @Column({ type: 'uuid', name: "category_id", nullable: false })
    category_id!: string;

    @OneToOne(() => ProjectCategory, { cascade: false })
    @JoinColumn({ name: 'category_id' })
    category: ProjectCategory;

    @Column({ type: "enum", enum: StatusDelected, name: "project_status", nullable: true, default: 'NOT_DELETED' })
    status: string = 'NOT_DELETED';

    @CreateDateColumn({ name: "created_at" })
    createdAt!: Date;

    constructor(){
        if(!this.id) this.id = uuid();
    }
}
