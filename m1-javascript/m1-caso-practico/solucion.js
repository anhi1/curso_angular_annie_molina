
//Paso1 : crear una clase activity 
class Activity{
    constructor(id, title, description, content, status, importance, date ){
        this.id = id;
        this.title = title;
        this.description = description;
        this.content = content;
        this.status = status;
        this.importance= importance;
        this.date = date;

    }
}

// paso2: crear una clase con metodos para trabajar con objetos activity
/* Crear una clase que represente un servicio de tareas que tenga como atributo una estructura de
   datos de tareas y métodos para gestionar las tareas:
• Añadir una nueva tarea
• Devolver todas las tareas (findAll)
• Devolver todas las tareas filtrando por estado
• Devolver todas las tareas filtrando por prioridad
• Actualizar una tarea (update)
• Eliminar una tarea (deleteById)
*/

// TagService

class ActivityDatabase{

    constructor(){
        this.activities = []; // this.activities : atributo   / [] -->estructura de datos //lista del array
    }

    addActivity(activity){
        /*
        Para simular una base de datos, generamos un id (1, 2, 3, ...) único para cada Activity
        con un bucle for o con la clase Math calcular el id mas alto de los ids.
        */
       activity.id = this.#generateNextId2(); //  ----???
       this.activities.push(activity);
       return activity;
    }

    #generateNextId(){
        let maxId = 0;
        for (const currentActivity of this.activities){
            if(currentActivity.id > maxId)
            maxId = currentActivity.id;
        }
        return ++maxId;
    }

    #generateNextId2(){
        if(this.activities.length === 0)
        return 1;
        //utilizar el metodo map() para obtener un array de ids
        let ids = this.activities.map(activity => activity.id);
        console.log(ids);
        //obtener el id maximo utilizando Math.max()
        let maxId = Math.max(...ids);
        return ++maxId;

    }

    finAll (){
        return this.activities;
    }

    filterById(id){ //filtrar por ID filterById
        return this.activities.filter(activity => activity.id === id);
    }

    filterByStatus(status){
        return this.activities.filter(activity => activity.status === status);
    }

    filterByTitle(){
        return this.activities.filter(activity => activity.title.include(title)); //?? es true o false
    }


    //Modifica un objeto activity que ya existe en el array de actividades
    update(activity){ //activity es el objeto
        let activityIndex = this.activities.findIndex(currentActivity => currentActivity.id === activity.id);
        // estoy cambiando el titulo- accedo a la actividad ----??
        this.activities [activityIndex].title = activity.title;
        this.activities [activityIndex].status = activity.status;
    }


    deleteById(id){
        let activityIndex = this.activities.findIndex(activity => activity.id === id); //------?? indica la posicion del id?
        this.activities.splice(activityIndex, 1);
    }
}


//Paso3: crear objetos y probar los metodos CRUD para simular una base de datos

let activityDatabase = new ActivityDatabase();
let reunionTrabajo = new Activity(
    undefined,  //id
    "Reunion Javascript", // title
    "tartar caso practico", // content
    "En progreso",  // status
    "Media", // importance
    new Date("2023-04-18")  // date
    );

let running = new Activity(
    undefined,
    "Entrenamiento cardiovascular",
    "correr 5 KM",
    "Terminado",
    "Normal",
    new Date("2023-04-15")
);

let gym = new Activity(
    undefined,
    "Entrenamiento cardiovascular",
    "Press banca",
    "pendiente",
    "Normal",
    new Date("2023-04-14")
    
);
//AGREGANDO actitivdades en el array
reunionTrabajo = activityDatabase.addActivity(reunionTrabajo); // id 1 // variable = objeto creado / metodo/ ---- (lo esta guardando en un array id =1)
console.log(reunionTrabajo.id);

running = activityDatabase.addActivity(running); // id 2
console.log(running.id);

gym = activityDatabase.addActivity(gym); // id 3   //(gym) es un objeto creado
console.log(gym.id);

let activity1 = activityDatabase.filterById(1);
let activity2 = activityDatabase.filterById(2);
let activitiesByStatus = activityDatabase.filterByStatus("pendiente");
let activitiesByTitle = activityDatabase.filterByStatus("Entrenamiento");

activityDatabase.deleteById(2);


//--------ACTUALIZAR-----------
console.log(activityDatabase.filterById(1));

let activity1Edited = new Activity(1,"modificado", undefined, "rechazado", undefined, undefined)

activityDatabase.update(activity1Edited);

console.log(activityDatabase.filterById(1));



//// ... desglosa cada elemento- evalua cada elemnto
//map: transformar y extrae cosas