import { Entity, Column, CreateDateColumn, PrimaryColumn, OneToOne, JoinColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuid } from 'uuid';
import { StatusDelected } from "../../utils/enums.util";

@Entity("project_categories")
export class ProjectCategory {

    @PrimaryColumn({ type: String })
    id!: string;

    @Column({ type: String, name: "name"})
    name!: string;

    @Column({ type: "enum", enum: StatusDelected, name: "category_status_enum" })
    status!: string;

    @CreateDateColumn({ name: "created_at" })
    createdAt!: Date;

    constructor(){
        if(!this.id) this.id = uuid();
    }
}