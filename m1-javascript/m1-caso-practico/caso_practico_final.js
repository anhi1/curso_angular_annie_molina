//
class Tarea {
    constructor(id, title, description, state, priority, date){
        this.id = id;
        this.title = title;
        this.description = description;
        this.state = state;
        this.priority = priority;
        this.date = date;
    }
}



class TareaDatabase{
    constructor(){
        this.tareas = [];
    }

    addTarea(tarea){
        tarea.id = this.#generateId();
        this.tareas.push(tarea);
        return tarea.id;
    }

    #generateId(){
        let maxId = 0;
        for(const currentTarea of this.tareas){
            if (currentTarea.id > maxId)
            maxId = currentTarea.id
        }
        return ++maxId;
    }

    findAll(){
        return this.tareas;
    }
    
}

//--------- Instanciar objeto de la base de datos -----------//

let tareaDatabase = new TareaDatabase();

//----------Instanciar objetos Tarea ---------(id, title, description, state, priority, date)//

let limpiar = new Tarea(1,"Limpieza", "limpiador", "pendiente", "importante", new Date("2023-05-15"));

let cocinar = new Tarea(2,"Cocina", "cocinero", "resuelto", "normal", new Date("2023-02-16"));

let atencionCliente = new Tarea(3,"Atencion", "servicioclientela", "pendiente", "normal", new Date("2023-03-19"));


//-------------- addTarea  ------

limpiar = tareaDatabase.addTarea(limpiar);
console.log(limpiar);

cocinar = tareaDatabase.addTarea(cocinar);
console.log(cocinar);

atencionCliente = tareaDatabase.addTarea(atencionCliente)
console.log(atencionCliente);


//-------------- findAll --------------
let allTareas = tareaDatabase.findAll();
console.log(allTareas); 


