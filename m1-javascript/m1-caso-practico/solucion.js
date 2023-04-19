
/**
 * CASO PRACTICO INDIVIDUAL
 * 1.Crear clase tarea: constructor con atributos
 * 2. Crear clase TareaService o TareaDatabase que es una clase con métodos para simular una base de datos, dentro tiene
un array de Tareas
 *
 */

// Paso1 : crear una clase activity
class Activity{
    constructor(id, title, description, content, status, importance, date ){
        this.id = id;
        this.title = title;
        this.description = description;
        this.content = content;
        this.status = status;
        this.importance= importance;
        this.date = date; //campo tipo fecha Date

    }
}

// Paso2: crear una clase con metodos para trabajar con objetos activity
/* Crear una clase que represente un servicio de tareas que tenga como atributo una estructura de
   datos de tareas y métodos para gestionar las tareas:
Operaciones CRUD:create, retrieve(recueprar), update, delete
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
        //inicializar una base de datos
        this.activities = []; // this.activities : atributo   / [] -->estructura de datos //lista del array
        
    }
/**
* Añade una nueva actividad en el array de actividades en consecuencia el array crece
* Para cada nueva actividad que se quiere añadir, genera un nuevo id que esté libre
* Para simular una base de datos, generamos un id (1, 2, 3, ...) único para cada Activity
  con un bucle for o con la clase Math calcular el id más alto de todos los ids 
* @param {*} activity objeto de la clase Activity
* @returns devuelve la actividad con un nuevo id asignado
*/
    addActivity(activity){
       activity.id = this.#generateNextId2(); //// asigna el nuevo id calculado en el objeto activity antes de guardarlo en el array
       this.activities.push(activity);
       return activity;
    }
    /**
     * Primero calcula cuál es el id (int) más alto de todos los ids pertenecientes 
     * a los objetos actividad del array activities. 
     * Una vez que obtiene el id máximo en la variable maxId entonces lo incrementa porque esa será el siguiente nuevo id
     * 
     * Utiliza for y if 
     * @returns 
     */
    #generateNextId(){
        let maxId = 0;
        for (const currentActivity of this.activities){ //itera cada currentActivity
            if(currentActivity.id > maxId)
            maxId = currentActivity.id;
        }
        return ++maxId; //operador incrmento ++ va la izquierda:primero asigna y luego hace el return(devuelve)
    }

    #generateNextId2(){
        if(this.activities.length === 0)
        return 1;
        //utilizar el metodo map() para obtener un array de ids -extraer el id de cada activity- obtengo un array de ids
        let ids = this.activities.map(activity => activity.id);
        console.log(ids);
        //obtener el id maximo utilizando Math.max()
        let maxId = Math.max(...ids); // se utiliza el operador..para desglosar
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

//-----------CREAR OBJETo BASE DE DATOS-----------------
let activityDatabase = new ActivityDatabase();
//es un objeto que tiene na base de datos


//-----------CREAR OBJETOS ACTIVITY-----------------
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