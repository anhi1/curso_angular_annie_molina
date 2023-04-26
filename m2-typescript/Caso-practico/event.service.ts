
//class

import { IEvent } from "./event.model";

/*
Opcional: convertir EventService en una interfaz y hacer dos clases que la impleneten una 
clase a las operaciones
*/
export class EventService {
    events:Array<IEvent> = [];

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