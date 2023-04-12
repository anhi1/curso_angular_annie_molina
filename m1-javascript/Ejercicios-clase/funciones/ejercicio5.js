/*
Crear una función que utilice otra función
1. Escribe una función llamada operacion 
que acepte tres argumentos: a, b y una función
operador.  La  función  operacion  debe  
ejecutar  la  función  operador  con  los  
argumentos  a  y  b  y
devolver el resultado
*/

//el tercer parametro es una funcion
function operacion(num1,num2,funcionoperador) {
    let result = funcionoperador(num1,num2);
    console.log(`resultado de operacion con ${num1} y ${num2} = ${result}`);
}
operacion(5,3, (a,b) => a + b);
operacion(5,3, (a,b) => a * b);
operacion(5,3, (a,b) => a - b);