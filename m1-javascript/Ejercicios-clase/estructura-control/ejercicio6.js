/*
6. Uso de bucle for anidado
-Escribe un bucle for anidado que muestre en consola una tabla de multiplicar del 1 al 10.

*/

let i = 1;
let j= 1;
for(let i=1; i<=10;i++){
    for(let j=1; j<=10; j++){
        let resultado = i*j;
        console.log(`${i} x ${j} = ${resultado}`);
    }  
}

