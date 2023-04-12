/*
Crear una función que devuelve otra
función
1. Escribe  una  función  llamada 
crearMultiplicador  que  acepte  un 
argumento  factor.  La  función
debe  devolver  otra  función  que
acepte  un  número  y  devuelva  el 
resultado  de  multiplicar  ese
número por el factor dado.
*/
function crearMultiplicador(factor) {
    return function(number){
        return number * factor
    }
}

let multiplicarPor5 = crearMultiplicador(5);
console.log(multiplicarPor5(1));
console.log(multiplicarPor5(2));
