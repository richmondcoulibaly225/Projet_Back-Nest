import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Location {

    @PrimaryGeneratedColumn()
    id_location: number

    @Column()
    loc_adresse: string

    @Column()
    loc_pays: string


}
