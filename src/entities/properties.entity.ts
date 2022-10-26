import { Entity, Column, PrimaryColumn, OneToOne, JoinColumn} from "typeorm";
import { v4 as uuid } from "uuid";
import { Addresses } from "./addresses.entity";
import { Categories } from "./categories.entity";

@Entity('properties')
export class Properties {
    @PrimaryColumn("uuid")
    id: string

    @Column({ default: false })
    sold: boolean

    @Column("float")
    value: number

    @Column()
    size: number

    @Column({type: "date"})
    createdAt: Date

    @Column({type: "date"})
    updatedAt: Date

    @OneToOne(() => Addresses,{
        eager: true
    }) @JoinColumn()
    address : Addresses

    @OneToOne(() => Categories,{
        eager: true
    }) @JoinColumn()
    category : Categories

    constructor() {
        if(!this.id){
            this.id = uuid()
        }
    }
}