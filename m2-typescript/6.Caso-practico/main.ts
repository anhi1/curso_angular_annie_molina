import { IEvent } from "./event.model";
import { EventService } from "./event.service";

const eventservice = new EventService(); // esto es la clase creada : new EventService


console.log(eventservice.findAll());
//te muestra un array vacio []

//creando un objeto
let evento1: IEvent ={
    id: -1,
    title: "Evento 1 largo de 4 días",
    priority: "BAJA",
    fecha: new Date(),
    description: "Lorem ipsum dolor"
}

let evento2: IEvent ={
    id: -1,
    title: "Evento 2 de 5 dias",
    fecha: new Date(),
    priority: "MEDIA",
    description: "descripcion1"
}

console.log(eventservice.save(evento1));
//console.log(eventservice.save(evento2));
console.log(eventservice.findAll());






