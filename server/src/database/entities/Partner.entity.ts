import { Entity, Column, CreateDateColumn, PrimaryColumn } from "typeorm";
import { v4 as uuid } from 'uuid';

@Entity("partners")
export class Partner {

    @PrimaryColumn()
    id: string;

    @Column()
    title: string;

    @Column()
    description: string;

    @Column()
    url_image: string;

    @Column()
    active: boolean;

    @CreateDateColumn()
    createdAt: Date;

    constructor(){
        if(!this.id) this.id = uuid();
    }
}