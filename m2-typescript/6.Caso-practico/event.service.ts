
//class
//opcional:convertir eventService en una interfaz
//y hacer dos clases que la implementen
//una clase hace las operaciones con un array

import { IEvent } from "./event.model";

export class EventService{
    private events: Array<IEvent> =[];
    private blackwords:string[]= ['prohibido1', 'prohibido2', 'prohibido3'];


    //METODOS
    //devuelve todos los eventos
    findAll():Array<IEvent>{
        return new Array(...this.events); // devolver una copia del array event
    }


    //devuelve un tipo de objeto id
    //selec * from eventos where id = 2 o id=3...
    findById(id:number): IEvent | undefined { // el tipo de retorno puede ser IEvent o undefined
        return this.events.find(evento => evento.id === id); // find devuelve un objeto //find recibe un predicado es decir una funcion
    //si el elemnto no existe es decir el id(132) , se pone undefined 
    }


    // te devuelve un array de eventos: select * from tablaEvento where prioridad = baja o media o alta ( te va ha salir la columna: ID/ tabla de evento/ priority)
    findAllByPriority(prioridad:string): Array<IEvent>{
        return this.events.filter(evento => evento.priority === prioridad); //prioridad es lo que te h pasado en parametro
    } // puedes filtrar un titulo, fecha
    //comprobar l longitud, permite si hay elemntos


    private generateNextId(): number {
        let maxId = 0;
        for (const event of this.events) {
            if (event.id > maxId)
                maxId = event.id;
        }
        return ++maxId;
    }


    private isValid(event: IEvent): boolean { //si es TRUE te marchas, si es FALSE sigues comprobrando las otras validaciones
        // validación 1: title tenga longitud entre 10 y 50
        // if (event.title.length >= 10 && event.title.length <= 50)
        //     return true;
        if (event.title.length < 10 || event.title.length > 50) //basta que con uno se cumpla
            return false;// el titulo no tiene la longitud entre 10 y 50

        // validación 2: title no esté ocupado ya
        for (const currentEvent of this.events)
            if(currentEvent.title === event.title) // si es true significa que el titulo ya existe //existe event.title en el currentEvent.title?
                return false; //el titulo no existe

        // validación 3: title no contenga una palabra prohibida
        for (const word of this.blackwords)
            if (event.title.includes(word))
                return false;
        
        return true; // todo OK(si todo esto no se ha cumplido todo correcto)
    }


    //modificar algo q ya existe
    public update(event: IEvent): IEvent { //retorna con tipo IEvent = es un objeto
        if(!event.id) //si no existe el event.id
            throw new Error("El id tiene que ser válido");

        let position = this.events.findIndex( //primero encontrar la posicion 
            currentEvent => currentEvent.id === event.id // le pasamos un predicado (una funcion)/ no puedo poner evento porque ya existe ponemos currentEvent
        );

        if (position === -1) // si no existe el elemnto te lanza un error
            throw new Error("404 not found");

        if (this.isValid(event))
            this.events[position].title = event.title;

        this.events[position].priority = event.priority;
        this.events[position].fecha = event.fecha;
        this.events[position].description = event.description;
        return event;
    }
    

    save(event:IEvent): IEvent{ // devuelve el evento que he guardado // el id se genera automaticamente con el metod save ???
        if(event.id! ==-1) // si el evento no exite que me lance error
        throw new Error("Para crear un nuevo evento no se añade un Id"); //throw palabra reservada

        if(!this.isValid(event)) // si el evento es incorrecto entonces no se guarda
        throw new Error('Datos incorrectos');

        event.id = this.generateNextId(); //this.generateNextId() asignarle con el id de evento
        return event;
    
    }


    

    



    
}


/*
import { IEvent } from "./event.model";

/*
Opcional: convertir EventService en una interfaz y hacer dos clases que la impleneten una 
clase a las operaciones

export class EventService {
    private events:Array<IEvent> = [];
    

    //metodos
    public findAll():Array<IEvent> { 
        return new Array(...this.events); //devolver una copia del array event
    }

    public findById(id:number): IEvent | undefined {
       return this.events.find(event => event.id === id) //e= event -itera por uno //find devuelve un objeto
    }

    public findByPriority(prioridad:string): Array<IEvent> { //prioridad:alta o baja
        return this.events.filter(evento => evento.priority=== prioridad) //filter devuelve un array
    }

    public save(event:IEvent): IEvent  { // se puede poner un boolea //tipo de objeto:IEvent
        if(event.id) //si el event.id existe decimos que :
        throw new Error("para crear un nuevo evento no se añade id");

        //Comprobar si existe otro evento con el mismo titulo
        if(!this.isValid(event))
        throw new Error("Datos incorrectos");
        
        //generar nuevo id y asignarlo al evento que se quiere guardar
        event.id = this.generateNxtId();

        //guardar
        this.events.push(event);
        return event;
    }

    private isValid(event: IEvent): boolean {
        //validacion 1: title tenga longitud entre 10 y 50
        if(event.title.length < 10 || event.title.length > 50)
        return false;

        //validacion 2: title no este ocupado ya
        for (const currentEvent of this.events)
           if(currentEvent.title === event.title) //si es true significa que el titulo ya existe
            return false;
        
        //validacion 3: No contenga una palabra prohibida
        let blackwords: string[] = ['prohibido1', 'prohibido2', 'prohibido3'];
        for(const word of blackwords)
            if (event.title.includes(word))
            return false;
        return true; //todo ok(correcto)
        
    }
    private generateNxtId():number{
        let maxId=0;
        for(const event of this.events){
            if(event.id > maxId)
            maxId =event.id;
        }
        return ++maxId;
    }
}
*/