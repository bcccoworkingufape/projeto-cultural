import { Entity, Column, PrimaryColumn } from "typeorm";
import { v4 as uuid } from 'uuid';

@Entity({name: 'users'})
export class User {
    @PrimaryColumn()
    readonly id: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column()
    type: string;
    
    @Column()
    active: boolean;

    constructor(){
        if(!this.id) this.id = uuid();
    }
}