import { Entity, Column, CreateDateColumn, PrimaryColumn, OneToOne, JoinColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuid } from 'uuid';
import { StatusDelected } from "../../utils/enums.util";

@Entity("project_categories")
export class ProjectCategory {

    @PrimaryColumn({ type: String })
    id: string;

    @Column({ type: String, name: "name"})
    name!: string;

    constructor(){
        if(!this.id) this.id = uuid();
    }
}