/*
3. Uso de map, filter y reduce en Arrays
1. Crea  un  array  llamado  calificaciones  que  contenga  calificaciones  numéricas  (por  ejemplo,  85,
90, 78, 92, 88).
2. Utiliza el método map para aumentar cada calificación en 5 puntos.
3. Utiliza el método filter para quedarte solo con las calificaciones mayores o iguales a 90.
4. Utiliza el método reduce para calcular la calificación promedio


//METODO MAP
let calificaciones = [85,90,70,60,85,95]
let sumar5 = calificacion => calificacion + 5
let calificacionsumado5 = calificaciones.map(sumar5);
consol.log(calificacionsumado5);



//1.ejercio con IVA obtener un array precionConIva(21% = 0.2) utilizando la funcion map:

let preciosSinIva=[4.9, 10.24, 40.99, 100]
console.log(preciosSinIva);
let sumarIva = precio => precio * 1.21
let precioConIva = preciosSinIva.map(sumarIva);
console.log(precioConIva);

//1.otra forma
let preciosConIva = preciosSinIva.map(precio => precio + precio*0.21)
*/
//3.
//el map y el filter iteran
//Opcion 1 : con for of
let calificaciones = [85,90,70,60,85,95]
let calificacionAltas =[];
for (const calificacion of calificaciones){
    if(calificacion>=90)
       calificacionAltas.push(calificacion);      
}

console.log(calificaciones);
console.log(calificacionAltas);

// Opcion2: Con filter y funcion flecha
//filter llama una funcion predicate(es una funcion)

let calificacionesAltas2 = calificaciones.filter(calificacion => calificacion >=90);
console.log(calificacionesAltas2);




