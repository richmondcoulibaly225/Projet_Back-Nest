import { Entity, PrimaryGeneratedColumn, Column , TableForeignKey} from "typeorm"

@Entity()
export class Contact {

    @PrimaryGeneratedColumn()
    id_contact: number

    @Column()
    numero: string


}
