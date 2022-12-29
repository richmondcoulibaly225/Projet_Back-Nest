import { AppDataSource } from "./data-source"
import { User } from "./entity/User"
import { Location } from "./entity/location"
import { Contact } from "./entity/contact"
import { Categorie } from "./entity/Categorie"
import { Reservation } from "./entity/reservation"
import { Vehicule } from "./entity/vehicule"


AppDataSource.initialize().then(async () => {

    console.log("Inserting a new user into the database...")
    const user = new User()
    user.nom = "Timber"
    user.prenom = "Saw"
    user.age = 25
    user.email = "timber.saw@gmail.com"

    console.log("Insérer un nouveau véhicule dans la base de données")
    const vehicule = new Vehicule()
    vehicule.type = "Prestige"
    vehicule.couleur = "Rouge"
    vehicule.marque = "Lamborghini"
    vehicule.model = "Aventador"

    /*console.log("Inserting a new user into the database...")
    const user = new User()
    user.nom = "Timber"
    user.prenom = "Saw"
    user.age = 25
    user.email = "timber.saw@gmail.com"

    console.log("Inserting a new user into the database...")
    const user = new User()
    user.nom = "Timber"
    user.prenom = "Saw"
    user.age = 25
    user.email = "timber.saw@gmail.com"

    console.log("Inserting a new user into the database...")
    const user = new User()
    user.nom = "Timber"
    user.prenom = "Saw"
    user.age = 25
    user.email = "timber.saw@gmail.com"

    console.log("Inserting a new user into the database...")
    const user = new User()
    user.nom = "Timber"
    user.prenom = "Saw"
    user.age = 25
    user.email = "timber.saw@gmail.com" */

    await AppDataSource.manager.save(user)
    console.log("Saved a new user with id: " + user.id)
    
    await AppDataSource.manager.save(vehicule)
    console.log("Saved a new user with id: " + vehicule.id)

    /*console.log("Loading users from the database...")
    const users = await AppDataSource.manager.find(User)
    console.log("Loaded users: ", users)

    console.log("Here you can setup and run express / fastify / any other framework.") */

}).catch(error => console.log(error))
