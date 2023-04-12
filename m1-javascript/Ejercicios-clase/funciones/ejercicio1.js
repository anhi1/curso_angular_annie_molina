/*
Crear una función simple
1. Escribe  una  función  llamada  saludar 
que  acepte  un  argumento  nombre  y  muestre 
en  consola un saludo personalizado
, por ejemplo, "¡Hola, Juan!"
*/
 function saludar(nombre) {
    console.log(`hola ${nombre}`);
 }
 //se puede invocar tantas veces
 saludar("annie");
 saludar("paty");

 let username = "betty";

 function isValidUsername(username) {
    return username.length > 0 && username.length < 50;
 }

 let valiUser = isValidUsername("ejemplousuario");
 
