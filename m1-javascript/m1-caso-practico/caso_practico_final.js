//
class Tarea {
    constructor(id, title, description, status, priority, date){
        this.id = id;
        this.title = title;
        this.description = description;
        this.status = status;
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

    filterById(id){
        let resultsId = this.tareas.filter(tarea => tarea.id === id);
        if(resultsId.length === 1)
        return resultsId[0];
    }

    filterByStatus(status){
        return this.tareas.filter(tarea => tarea.status === status);
    }

    filterByPriority(priority){
        return this.tareas.filter(tarea => tarea.priority === priority);
    }

    update(tarea){
        let tareaIndex = this.tareas.findIndex(currentTarea => currentTarea.id === tarea.id);
        if (tareaIndex === -1)
            return undefined;

        this.tareas[tareaIndex].title = tarea.title;// Modifica
        /*
        this.tareas[tareaIndex].description = tarea.description;
        this.tareas[tareaIndex].status = tarea.status;
        this.tareas[tareaIndex].priority = tarea.priority;
        this.tareas[tareaIndex].date = tarea.date;
        */
        return tarea; // te deuelve la tarea actualiza con los datos modificados
        
    }
    
}

//--------- Instanciar objeto de la base de datos -----------//

let tareaDatabase = new TareaDatabase();

//----------Instanciar objetos Tarea ---------(id, title, description, status, priority, date)//

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


//------------ filterByStatus() --------------
console.log(tareaDatabase.filterByStatus("pendiente"));


//------------- filterByPriority() ----------
 console.log(tareaDatabase.filterByPriority("importante"));


//------------ Update -----------------
console.log(tareaDatabase.filterById(1));
let modificado = new Tarea(1,"Area de limpieza", undefined, undefined, undefined, undefined)
tareaDatabase.update(modificado)
console.log(tareaDatabase.filterById(1));

