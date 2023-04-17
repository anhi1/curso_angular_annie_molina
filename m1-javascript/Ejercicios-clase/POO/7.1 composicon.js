
//un evento puede tener un lista de invitados //estructura de datos tiene objetos dentro
class User{
    constructor(firstName, email,){
        this.firstName = firstName;
        this.email = email;
    }
}

let juan = new User ("juan","juan@gmail.com");
let jeane = new User ("jeane","jeane@gmail.com");
let alan = new User ("alan","alan@gmail.com");
let user4 = new User ("usuario4","user4@gmail.com");
let user5 = new User ("usuario5","user5@gmail.com");

class Event {
    constructor(title, date, adminUser){
        this.title = title;
        this.date = date;
        this.adminUser = adminUser; //objeto de la clase User
        //lista de usuarios de invitados
        this.users = [];//user es una estructura de datos- list de usuarios invitados
    }

    //metodo para añadir invitado
    addUser(user){
        this.users.push(user);
    }
}

let date1 = new Date();
let event1 = new Event("Clase de javascript", date1, juan);
event1.addUser(jeane);
event1.addUser(alan);
event1.addUser(user4);
event1.addUser(user5);
console.log(event1);
console.log(`Hay un total de ${event1.users.length} usuarios invitados`);
console.log(`la reunion ${event1.title} ha sido organizada por ${event1.adminUser.firstName}`);