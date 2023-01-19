import { Entity, Column, CreateDateColumn, PrimaryColumn } from "typeorm";
import { v4 as uuid } from 'uuid';
import { StatusDelected } from "../../utils/enums.util";

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

    @Column({ type: "enum", enum: StatusDelected, name: "address_status_enum", nullable: false, default: 'NOT_DELETED' })
    status: string = 'NOT_DELETED';

    @CreateDateColumn({ type: String })
    createdAt: Date;

    constructor(){
        if(!this.id) this.id = uuid();
    }
}