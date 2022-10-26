import { Entity, Column, PrimaryColumn, JoinTable, ManyToOne} from "typeorm";
import { v4 as uuid } from "uuid";
import { Properties } from "./properties.entity";
import { User } from "./user.entity";

@Entity('schedules_users_properties')
export class Schedules_users_properties {
    @PrimaryColumn("uuid")
    id: string

    @Column({ type: "date" })
    date: string

    @Column({type: "time"})
    hour: string

    @ManyToOne(() => Properties,{
        eager: true
    })@JoinTable()
    properties: Properties

    @ManyToOne(() => User,{
        eager: true
    })@JoinTable()
    user: User

    constructor() {
        if(!this.id){
            this.id = uuid()
        }
    }
}