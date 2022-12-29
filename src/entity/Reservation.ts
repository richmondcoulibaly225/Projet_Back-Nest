import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Reservation {

    @PrimaryGeneratedColumn()
    id_reservation: number

    @Column()
    prix_location: string


}
