import { Entity, Column, CreateDateColumn, PrimaryColumn } from "typeorm";
import { v4 as uuid } from 'uuid';

@Entity("supports")
export class Support {

    @PrimaryColumn({ type: String })
    id: string;

    @Column({ type: String })
    user_id: string;

    @Column({ type: String })
    project_id: string;

    @CreateDateColumn({ type: String })
    createdAt: Date;

    constructor(){
        if(!this.id) this.id = uuid();
    }
}


