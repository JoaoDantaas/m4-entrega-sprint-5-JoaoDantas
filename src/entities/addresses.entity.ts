import { Entity, Column, PrimaryColumn} from "typeorm";
import { v4 as uuid } from "uuid";

@Entity('addresses')
export class Addresses {
    @PrimaryColumn("uuid")
    id: string

    @Column()
    district: string

    @Column()
    zipCode: string

    @Column({nullable: true})
    number: string

    @Column()
    city: string

    @Column()
    state: string


    constructor() {
        if(!this.id){
            this.id = uuid()
        }
    }
}