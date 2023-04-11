/*
Uso de la estructura switch
1. Crea una variable fruta y asígnale el nombre de una fruta.
2. Utiliza  una  estructura  switch  para  determinar  si  la  fruta  es  roja  (manzana,  fresa),  amarilla
(plátano, piña) o de otro color (naranja, uva) y muestra el resultado en consola
*/

let fruta ="manzana";

switch (fruta) {
    case "manzana":
    case "fresa":
        console.log('la fruta es roja');
        break;
    case "platano":
    case "pina":
        console.log('la fruta es amarilla');
        break;
    case "naranja":
    case "uva":
        console.log('es de otro color');
        break;
    default:
        console.log('no existe');
        break;
}
