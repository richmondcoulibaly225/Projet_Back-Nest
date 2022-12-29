import "reflect-metadata"
import { DataSource } from "typeorm"
import { Categorie } from "./entity/Categorie"
import { Contact } from "./entity/contact"
import { Location } from "./entity/location"
import { Reservation } from "./entity/reservation"
import { User } from "./entity/User"
import { Vehicule } from "./entity/vehicule"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "",
    database: "nestjs",
    synchronize: true,
    logging: false,
    entities: [User, Location, Reservation, Vehicule, Contact, Categorie],
    migrations: [],
    subscribers: [],
})
