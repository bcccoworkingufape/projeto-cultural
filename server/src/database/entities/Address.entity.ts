import { Entity, Column, CreateDateColumn, PrimaryColumn, OneToOne, JoinColumn } from "typeorm";
import { v4 as uuid } from 'uuid';
import { StatusDelected } from "../../utils/enums.util";

@Entity("addresses")
export class Address {

    @PrimaryColumn({ type: String })
    id: string;

    @Column({ type: String })
    postal_code?: string;

    @Column({ type: String })
    street?: string;

    @Column({ type: String })
    neighbourhood?: string;

    @Column({ type: String })
    number?: string;

    @Column({ type: String })
    state?: boolean;

    @Column({ type: String })
    city?: string;

    @Column({ type: "enum", enum: StatusDelected, name: "address_status_enum" })
    status!: string;

    @CreateDateColumn({ name: "created_at" })
    createdAt!: Date;

    constructor(){
        if(!this.id) this.id = uuid();
    }
}