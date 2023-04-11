/*
1. Crea dos variables saludo y persona con los valores "¡Hola!" y tu nombre, respectivamente.
2. Utiliza  el  operador  +  para  concatenar  las  dos  variables  y  mostrar  en  consola  el  mensaje
completo, por ejemplo, "¡Hola, Juan!". */

let saludo = "Hola";
let firtsName = "Annie";
let lastName = "Molina";
let saludoCompleto1 = saludo + " " + firtsName +" "+ lastName;

console.log(saludoCompleto1);

let saludoCompleto2 = `${saludo} ${firtsName} ${lastName}`;