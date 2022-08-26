import { Entity, Column, CreateDateColumn, PrimaryColumn } from "typeorm";
import { v4 as uuid } from 'uuid';

@Entity("likes")
export class Like {

    @PrimaryColumn()
    id: string;

    @Column()
    user_id: string;

    @Column()
    project_id: boolean;

    @CreateDateColumn()
    createdAt: Date;

    constructor(){
        if(!this.id) this.id = uuid();
    }
}

