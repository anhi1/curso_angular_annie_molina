/*
3. Uso de map, filter y reduce en Arrays
1. Crea  un  array  llamado  calificaciones  que  contenga  calificaciones  numéricas  (por  ejemplo,  85,
90, 78, 92, 88).
2. Utiliza el método map para aumentar cada calificación en 5 puntos.
3. Utiliza el método filter para quedarte solo con las calificaciones mayores o iguales a 90.
4. Utiliza el método reduce para calcular la calificación promedio
*/
//4.
let calificaciones = [85,90,70,60,85,95];

//opcion 1 sumar con un blucle for y dividir la suma para calcular la media
let sumatorio = 0;
for(calificacion of calificaciones){
    sumatorio += calificacion;
};
console.log(sumatorio);
let calificacionMedia = sumatorio/calificaciones.length;
console.log(`promedio de calificaciones: ${calificacionMedia}`);



//opcion 2(resumen del for): sumar todo con reduce y luego dividir para calcular la media
//reduce : el proceso de acumulacion
let calcularSumatorio =(sumatorio, calificacion) => sumatorio + calificacion
let sumatorio2 = calificaciones.reduce(calcularSumatorio,0); // 0 es como poner let sumatorio=0
console.log(`suma total de las calificaciones: ${sumatorio2}`);
let calificacionMedia2 = sumatorio2/calificaciones.length;
console.log(`promedio de calificaciones ${calificacionMedia2}`);