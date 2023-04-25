/*
La palabra import permite importar clases,
metodos de otros archivos

*/

import { Laptop } from "./laptop.model";

const laptop1 = new Laptop(1, 8, 4,"ASUS", "A55A");

console.log(laptop1.getFullName());

// al ser privado no se puede acceder
// seria necesario un metodo public
// console.log(laptop1.manufacturer)
// INTERFAZ es como un contrato, sin implementar metodos, crear multiples formas de interpretaciones

