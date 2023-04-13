/*
Iterar sobre un Array
1. Crea un array llamado numeros que contenga los números del 1 al 5.
2. Utiliza un bucle for para iterar sobre el array e imprimir cada número en consola.


let numeros = [1,2,3,4,5];
for(let i = 0; i<numeros.length; i++){
   console.log(numeros[i]);
}
*/

let numeros = [1,2,3,4,5];
for (let i = numeros.length-1; i >= 0; i--) {
    console.log(numeros[i]);  
}

/*
for (let numero of numeros)
    console.log(numero);
*/



