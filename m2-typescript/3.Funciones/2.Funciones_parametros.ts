function saludarPersona1(firstName:string, age?: number): void{
    console.log(`${firstName} con edad ${age}`);
    
}

// si no se especifica el parametro entonces tomara valor  undefined
// saludarPersona1("Persona1");
// saludarPersona1("Persona1", 30);
saludarPersona1("annie");
saludarPersona1("annie", 30);


// OPCION 2 
function saludarPersona2(firstName: string, age?: number):void{
    if(age === undefined){
        console.log(`${firstName} con edad desconocida`);
        return; // hace un return y se marcha
        
    }
    console.log(`${firstName} con edad ${age}`);
    
}
saludarPersona2('betty')
saludarPersona2('betty', 37);


//OPCION 3 : Comprobar parametro opcional con operador ternario ?:
function saludarPersona3(firstName:string, age?:number):void{
    age === undefined ?
    console.log(`${firstName} con edad desconocida`) : // es igual a if
    console.log(`${firstName} con edad ${age}`); // else   
}

saludarPersona3('ana', 30);

// OPCION 4: Asignar valor por defecto a variable opcional con operador (??)

function saludarPersona4(firstName: string, age?:number):void{
    console.log(`${firstName} con edad ${age ?? 18}`);
    
}
saludarPersona4("persona4");
saludarPersona4("Persona4", 30);



//A NIVEL DE CODIGO LIMPIO O CLEAN CODE
// CUANTOS MENOS PARAMETROS TENGA UNA FUNCION MAS FACIL SERA DE MANTENER Y TESTEAR

//FUNCIONES PURA: NO MODIFICA LOS PARAMETROS
//PREDECIBLE: NO CREA EFECTOS SECUNDARIOS: que esa funcion modifica la base de datos





