import { Entity, Column, CreateDateColumn, PrimaryColumn, OneToOne, JoinColumn } from "typeorm";
import { v4 as uuid } from 'uuid';
import { Project } from "./Project.entity";
import { User } from "./User.entity";

@Entity("supports")
export class Support {

    @PrimaryColumn({ type: String })
    id: string;

    @Column({ type: 'uuid', name: 'user_id', nullable: false })
    user_id: string;

    @OneToOne(() => User, { cascade: false })
    @JoinColumn({ name: 'user_id' })
    user: User;

    @Column({ type: 'uuid', name: 'project_id', nullable: false })
    project_id: string;

    @OneToOne(() => Project, { cascade: false })
    @JoinColumn({ name: 'project_id' })
    project: Project;

    @CreateDateColumn({ type: String })
    createdAt: Date;

    constructor(){
        if(!this.id) this.id = uuid();
    }
}


