import { Entity, Column, CreateDateColumn, PrimaryColumn, OneToOne, JoinColumn } from "typeorm";
import { v4 as uuid } from 'uuid';
import { StatusDelected } from "../../utils/enums.util";
import { Address } from "./Address.entity";
import { DigitalPresence } from "./Digital_Presence.entity";

@Entity("users")
export class User {

    @PrimaryColumn({ type: String })
    id: string;

    @Column({ type: String })
    email: string;

    @Column({ type: String })
    name: string;

    @Column({ type: String })
    password: string;

    @Column({ type: String, nullable: true })
    passwordResetToken: string = null;

    @Column({ type: String })
    user_type: string;

    @Column({ type: String })
    imageURL: string;

    @Column({ type: String, nullable: true, default: true })
    active: boolean = true;

    @CreateDateColumn({ type: String })
    createdAt: Date;

    @Column({ type: String, nullable: true })
    passwordResetExpiration: Date;

    @Column({ type: 'uuid', name: "address_id", nullable: true })
    addressId?: string;

    @OneToOne(() => Address, { cascade: true })
    @JoinColumn({ name: 'address_id' })
    address: Address;

    @Column({ type: 'uuid', name: "digital_presence_id", nullable: true })
    digitalPresenceId?: string;

    @OneToOne(() => DigitalPresence, { cascade: true })
    @JoinColumn({ name: 'digital_presence_id' })
    digitalPresence: DigitalPresence;

    @Column({ type: "enum", enum: StatusDelected, name: "address_status_enum", nullable: false, default: 'NOT_DELETED' })
    status: string = 'NOT_DELETED';
    
    constructor(){
        if(!this.id) this.id = uuid();
    }
}
