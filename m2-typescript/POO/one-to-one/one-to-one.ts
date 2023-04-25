import { IAddress } from "./address.model";
import { IUser } from "./user.model";

 

 //crear objetos-- este es el que centraliza - main
let address1: IAddress ={
    id:1,
    street:"Calle falsa 123",
    postalCode: "33034",
    city: "Gijon",
    country: "Spain"
}

let address2: IAddress ={
    id:2,
    street:"Calle verdadera 123",
    postalCode: "55067",
    city: "Toledo",
    country: "Spain"
}

let user1: IUser ={
    id: 1,
    email: "user1@gmail.com",
    birthday: new Date(1990,1,1),
    phone: "654321234",
    address: address1 //ONE TO ONE
}

console.log(`usuario ${user1.email} vive en ${user1.address.city} de ${user1.address.country}`);



//el usuario se cambia de casa
user1.address = address2;

console.log(`usuario ${user1.email} vive en ${user1.address.city} de ${user1.address.country}`);


// Crear objeto address y user a la vez en la propia creación del usuario
let user2: IUser={
    id: 2,
    email: "correo@gmail.com",
    birthday: new Date,
    phone: "65454332",
    address:{
        id:2,
        street:"otra calle",
        postalCode: "28002",
        city: "Madrid",
        country: "España"
    } 
}
console.log(`${user2.email} vive en ${user2.address.city}`);
