function saludarPersona1(firstName:string, age?: number): void{
    console.log(`${firstName} con edad ${age}`);
    
}

// si no se especifica el parametro entonces tomara valor  undefined
saludarPersona1("Persona1");

saludarPersona1("Persona1", 30);



// Opcion 2

function saludarPersona2(firstName:string, age?: number): void{
    if(age === undefined){
        console.log(`${firstName} con edad desconocida`);
        return; // hace un return y se marcha
    }
    console.log(`${firstName} con edad ${age}`);
}

// saludarPersona2("Persona2");
//saludarPersona2("Persona2",30);


//OPCION: Comprobar parametro opcional con operador ternario
function saludarPersona3(firstName:string, age?: number): void{
    age === undefined ?
    console.log(`${firstName} con edad desconocida`):
    console.log(`${firstName} con edad ${age}`);  
}

saludarPersona2("Persona3");
saludarPersona2("Persona3",30);

// cuando algo es indefinido, si toiene valor le asignas y si no 
// OPCION 4:OPERADO ?? : Asignar por valor por defecto a variable opcional con operador

function saludarPersona4(firstName:string, age?: number): void{
    age = age ?? 18;
    console.log(`${firstName} con edad ${age} ?? 18`); // UN VALOR POR DEFECTO   
}

//A NIVEL DE CODIGO LIMPIO O CLEAN CODE
// CUANTOS MENOS PARAMETROS TENGA UNA FUNCION MAS FACIL SERA DE

//FUNCIONES PURA: NO MODIFICA LOS PARAMETROS
//PREDECIBLE: NO CREA EFECTOS SECUNDARIOS: que esa funcion modifica la base de datos





