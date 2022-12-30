import { Entity, Column, CreateDateColumn, PrimaryColumn } from "typeorm";
import { v4 as uuid } from 'uuid';

@Entity("digital_presences")
export class DigitalPresence {

    @PrimaryColumn({ type: String })
    id: string;

    @Column({ type: String })
    instagram_url: string;

    @Column({ type: String })
    facebook_url: string;

    @Column({ type: String })
    youtube_url: string;

    @Column({ type: String })
    personal_site_url: boolean;

    @CreateDateColumn({ type: String })
    createdAt: Date;

    constructor(){
        if(!this.id) this.id = uuid();
    }
}