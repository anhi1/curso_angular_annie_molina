let fechaActual = new Date();
console.log(fechaActual);

//yyyy-MM-DD
let fechaNacimiento = new Date("1990-12-14");//crear un objeto fechaNacimiento
console.log(fechaNacimiento);

//extraer el año de la fecha
console.log(fechaNacimiento.getFullYear());

//extraer el mes (empieza de cero)
console.log(fechaNacimiento.getMonth());

//Navidad
let nuevaFecha = new Date(1990, 11, 25, 23, 30) // el date ya existe es parte de js
console.log(nuevaFecha);

//caso ferbrero
let ejemploFebrero = new Date(1990,1,30,23,30)
console.log(ejemploFebrero);//se va ha marzo por febrero tiene 28 dias