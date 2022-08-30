import { Entity, Column, CreateDateColumn, PrimaryColumn } from "typeorm";
import { v4 as uuid } from 'uuid';

@Entity("digital_presences")
export class User {

    @PrimaryColumn()
    id: string;

    @Column()
    instagram_url: string;

    @Column()
    facebook_url: string;

    @Column()
    youtube_url: string;

    @Column()
    personal_site_url: boolean;

    @CreateDateColumn()
    createdAt: Date;

    constructor(){
        if(!this.id) this.id = uuid();
    }
}