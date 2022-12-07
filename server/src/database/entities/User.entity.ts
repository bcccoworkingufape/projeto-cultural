import { Entity, Column, CreateDateColumn, PrimaryColumn, OneToOne, JoinColumn } from "typeorm";
import { v4 as uuid } from 'uuid';
import { Address } from "./Address.entity";
import { DigitalPresence } from "./Digital_Presence.entity";

@Entity("users")
export class User {

    @PrimaryColumn()
    id: string;

    @Column()
    email: string;

    @Column()
    name: string;

    @Column()
    password: string;

    @Column()
    user_type: string;

    @Column()
    imageURL: string;

    @Column()
    active: boolean;

    @CreateDateColumn()
    createdAt: Date;

    @Column({ type: 'uuid', name: "address_id", nullable: true })
    addressId?: string;

    @OneToOne(() => Address, { cascade: true })
    @JoinColumn({ name: 'address_id' })
    address: Address;

    @Column({ type: 'uuid', name: "digital_presence_id", nullable: true })
    digitalPresenceId?: string;

    @OneToOne(() => Address, { cascade: true })
    @JoinColumn({ name: 'digital_presence_id' })
    digitalPresence: DigitalPresence;
    
    constructor(){
        if(!this.id) this.id = uuid();
    }
}
