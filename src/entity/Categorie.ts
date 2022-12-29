import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Categorie {

    @PrimaryGeneratedColumn()
    id_categorie: number

    @Column()
    description: string

    @Column()
    étiquette: string


}
