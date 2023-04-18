
//paso1: crear una clase activity 
class Activity{
    constructor(id, tittle, description, content, status, importance, date ){
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
• Actualizar una tarea
• Eliminar una tarea (deleteById)
*/
//estructura de datos = lista del array
// TagService

class ActivityDatabase{

    constructor(){
        this.activities = []; // this.activities : atributo   / =[] -->estructura de datos
    }

    addActivity(activity){
        /*
        Para simular na base de datos, generamos un id (1, 2, 3, ...) único para cada Activity
        con un bucle for o con la clase Math calcular el id mas alto de los ids.
        */

        let maxId = 0;
        for( const currentActivity of this.activities){
            console.log(currentActivity.id);
            if(currentActivity.id > maxId)
                maxId = currentActivity.id;
                 
        }
            console.log(`Valor id maximo ${maxId}`);

            maxId ++;
            activity.id = maxId;
            this.activities.push(activity);
            return activity;
        
        
    }

    update(activity){ //activity es el objeto
        let activityIndex = this.activities.findIndex(activity =>)

        // estoy cambiando el titulo- accedo a la actividad
        this.activities [activity.index].title = activity

    }
}


//Paso3: crear objetos y probar los metodos CRUD para simular una base de datos

let activityDatabase = new ActivityDatabase();
let reunionTrabajo = new Activity(
    undefined,
    "Reunion Javascript",
    "tartar caso practico",
    "En progreso",
    "Media",
    new Date("2023-04-18")
    );

let running = new Activity(
    undefined,
    "Entrenamiento cardiovascular",
    "correr 5 KM",
    "Terminado",
    "Normal",
    new Date("2023-04-15")
);
activityDatabase.addActivity(reunionTrabajo);// lo esta guardando en un array id =1
activityDatabase.addActivity(running);
//// ... desglosa cada elemento- evalua cada elemnto
//map: transformar y extrae cosas