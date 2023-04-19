
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


    /**
     * Primero calcula cuál es el id (int) más alto de todos los ids pertenecientes 
     * a los objetos actividad del array activities. 
     * Una vez que obtiene el id máximo en la variable maxId entonces lo incrementa porque esa será el siguiente nuevo id
     * 
     * Utiliza map y Math.max
     * @returns 
     */
     
    #generateNextId2(){
        if(this.activities.length === 0)
        return 1;
        //utilizar el metodo map() para obtener un array de ids -extraer el id de cada activity- obtengo un array de ids
        let ids = this.activities.map(activity => activity.id);
        console.log(ids);
        //obtener el id maximo utilizando Math.max()
        let maxId = Math.max(...ids); // se utiliza el operador..para desglosar el array en elemntos
        return ++maxId;

    }

     /**
     * Devuelve el array de actividades. SELECT * FROM activities
     * @returns 
     */
    finAll (){
        return this.activities;
    }

     /**
     * Devuelve un objeto activity. SELECT * FROM activities WHERE id = X
     * @param {*} id numero id de la actividad a buscar
     * @returns el objeto actividad si existe o undefined si no se encuentra
     */
    filterById(id){ //filtrar por ID filterById(1)
       let results = this.activities.filter(activity => activity.id === id);
        if(results.length === 1)
        return results[0];
    }

    /**
     * Devuelve un array de activities con el estado solicitado por parámetro
     * @param {*} status un string que representa un estado de tarea: "EN PROGRESO", "TERMINADO"
     * @returns array de actividades o un array vacío
     */
    filterByStatus(status){ //devuelve una estructura de datos filterByStatus("En progreso");
        return this.activities.filter(activity => activity.status === status);
    }

    /**
     * Devuelve un array de actividades filtrando por el título, no es coincidencia estricta o exacta, se busca que contenga
     * @param {*} title palabras a buscar en el título del activity
     * @returns array de actividades o un array vacío
     */
    filterByTitle(){
        return this.activities.filter(activity => activity.title.include(title));
         // return this.activities.filter(activity => activity.title === title);
    }

     /**
     * Actualiza un objeto activity existente en el array de activities
     * @param {*} activity a actualizar con el id correcto y los atributos editados
     * @returns objeto activity actualizado o undefined si no lo encuentra
     */
    update(activity){ //activity es el objeto
        let activityIndex = this.activities.findIndex(currentActivity => currentActivity.id === activity.id);
            if (activityIndex === -1)
            return undefined;

        this.activities [activityIndex].title = activity.title;
        this.activities [activityIndex].status = activity.status;
        return activity;
       
    }

    update2(activity){
        let activityIndex = this.activities.findIndex(
            currentActivity => currentActivity.id === activity.id
        );
        if (activityIndex === -1)
            return undefined;

        let updatedAct = {...this.activities[activityIndex] , ...activity};

        this.activities[activityIndex] = updatedAct;

    }

    /**
     * Borra un objeto activity del array de activities en base a su id
     * DELETE FROM activities WHERE id = X
     * @param {*} id el número id del activity que hay que borrar
     */

    deleteById(id){
        let activityIndex = this.activities.findIndex(activity => activity.id === id);
        
        if(activityIndex === -1)
            return;
        
        this.activities.splice(activityIndex, 1);
    }

    /**
     * Vacía el array de activities, lo deja a length 0
     * DELETE FROM activities
     */
    deleteAll() {
        this.activities = [];
    }

    /**
     * Devuelve el número de activities en base de datos
     * @returns 
     */
    count() {
        return this.activities.length;
    }
}


//Paso3: crear objetos y probar los metodos CRUD para simular una base de datos


//-----------CREAR OBJETo BASE DE DATOS-----------------

let activityDatabase = new ActivityDatabase();
//es un objeto que tiene una base de datos


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
    "Correr 5 KM", 
    "Pendiente",
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

// =======AGREGANDO ACIVIDADES EN LA BASE DE DATOS : addActivity =======

reunionTrabajo = activityDatabase.addActivity(reunionTrabajo); // id 1 // variable = objeto creado / metodo/ ---- (lo esta guardando en un array id =1)
console.log(reunionTrabajo.id);

running = activityDatabase.addActivity(running); // id 2
console.log(running.id);

gym = activityDatabase.addActivity(gym); // id 3   //(gym) es un objeto creado
console.log(gym.id);

//============ BUSCAR UNO: filterById =================

console.log(activityDatabase.filterById(1));
console.log(activityDatabase.filterById(999));


 // ======================================= BUSCAR POR STATUS: filterByStatus ==============================

 console.log(activityDatabase.filterByStatus("Pendiente"));
 console.log(activityDatabase.filterByStatus("No existe"));



 // ======================================= BUSCAR POR TITULO: filterByTitle ==============================

 console.log(activityDatabase.filterByTitle("Entrenamiento"));
 console.log(activityDatabase.filterByTitle("No existe"));


 
 // ======================================= ACTUALIZAR: upate ==============================

console.log(activityDatabase.filterById(1));

let activity1Edited = new Activity(1, "modificado", undefined, "rechazado", undefined, undefined)
activityDatabase.update(activity1Edited);

console.log(activityDatabase.filterById(1));

// probar a buscar un activity que no exista
let act999 = new Activity(975, "modificado", undefined, "rechazado", undefined, undefined)
console.log(activityDatabase.update(act999)); // undefined

 // ======================================= ACTUALIZAR: upate2 ==============================
let original1 = activityDatabase.filterById(1);
let act1 = new Activity(1, "PRUEBA UPDATE2", original1.content, "STATUS UPDATE2", "IMPORTANCE UPDATE2", new Date("2028-01-01"));
activityDatabase.update2(act1); // actualiza en base de datos

let act2 = {
    id: 2,
    title: "TITULO MODIFICADO DESDE UPDATE2"
}
activityDatabase.update2(act2);


 // ======================================= BORRAR: deleteById ==============================
console.log(activityDatabase.count()); // before (5)
activityDatabase.deleteById(2);
console.log(activityDatabase.count()); // before - 1 (4)

 // ======================================= BORRAR: deleteAll ==============================
console.log(activityDatabase.count()); // (5)
activityDatabase.deleteAll(); // borra todo
console.log(activityDatabase.count()); // 0 (0)



//map: transformar y extrae cosas