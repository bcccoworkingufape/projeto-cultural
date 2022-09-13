import { Entity, Column, CreateDateColumn, PrimaryColumn, ManyToMany, JoinTable, ManyToOne, OneToOne, JoinColumn, } from "typeorm";
import { v4 as uuid } from 'uuid';
import { StatusActive, StatusDelected } from "../../utils/enums.util";

@Entity("project_categories")
export class Project {

    @PrimaryColumn()
    id!: string;

    @Column({ type: String, name: "name"})
    name!: string;

    @Column({ type: String, name: "description"})
    description!: string;

    @Column({ type: String, name: "external_url"})
    externalURL?: string;

    @Column({ type: String, name: "image_url"})
    imageURL?: string;

    @Column({ type: String , name: "video_url"})
    videoURL?: string;

    @Column({ type: 'uuid', name: "user_id", nullable: false })
    userId!: string;
    
    @ManyToMany(() => ProjectCategory)
    @JoinTable()
    categories: ProjectCategory[];

    @Column({ type: "enum", enum: StatusDelected, name: "project_status_enum" })
    status!: string;

    @Column({ type: "enum", enum: StatusActive, name: "category_status_enum" })
    active!: string;

    @CreateDateColumn({ name: "created_at" })
    createdAt!: Date;

    constructor(){
        if(!this.id) this.id = uuid();
    }
}