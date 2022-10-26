import { Entity, Column, PrimaryColumn} from "typeorm";
import { v4 as uuid } from "uuid";

@Entity('categories')
export class Categories {
    @PrimaryColumn("uuid")
    id: string

    @Column({ unique:true })
    name: string

    constructor() {
        if(!this.id){
            this.id = uuid()
        }
    }
}