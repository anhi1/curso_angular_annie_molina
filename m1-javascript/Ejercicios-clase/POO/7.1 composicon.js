
//un evento puede tener un lista de invitados //estructura de datos tiene objetos dentro
class User{
    constructor(firstName, email,){
        this.firstName = firstName;
        this.email = email;
    }
}

let user1 = new User ("usuario1","user1@gmail.com");
let user2 = new User ("usuario2","user2@gmail.com");
let user3 = new User ("usuario3","user3@gmail.com");
let user4 = new User ("usuario3","user3@gmail.com");
let user5 = new User ("usuario3","user3@gmail.com");

class Event {
    constructor(title, date, adminUser){
        this.title = title;
        this.date = date;
        this.adminUser = adminUser; //objeto de la clase User
        //lista de usuarios de invitados
        this.users = [];//user es una estructura de datos
    }

    //metodo para añadir invitado
    addUser(user){
        this.users.push(user);
    }
}

let date1 = new Date();
let event1 = new Event("clase de javascript", date1, user1);
event1.addUser(user2);
event1.addUser(user3);
event1.addUser(user4);
event1.addUser(user5);
console.log(event1);
