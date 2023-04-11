/*
Crear y manipular un Array
1. Crea un array llamado frutas que contenga tres frutas: "manzana", "plátano" y "naranja".
2. Agrega una fruta al final del array usando el método push.
3. Elimina la primera fruta del array usando el método shift.
4. Muestra en consola la longitud del array.
*/
let fruta = ['manzana','platano','naranja']

let agregar = fruta.push('pera');
console.log(fruta);

let eliminar = fruta.shift();
console.log('se eliminó la manzana: ' + fruta);

let longArray = fruta.length
console.log('la longitud del array es ' + longArray);