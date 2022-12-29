import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Vehicule {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    type: string

    @Column()
    couleur: string

    @Column()
    marque: string

    @Column()
    model: string

}
