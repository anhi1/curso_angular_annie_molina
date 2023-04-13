/*
 Crear y manipular un Objeto
1. Crea un objeto llamado persona con las propiedades nombre, apellido, edad y ciudad.
2. Cambia el valor de la propiedad ciudad a una nueva ciudad.
3. Agrega una propiedad ocupacion al objeto.
4. Muestra en consola todas las propiedades y sus valores usando un bucle for...in
*/

class Persona{
    nombre ="Persona";
    apellido = "Apellido";
    edad = 18;
    ciudad = "Madrid";
}


//CREAR UN OBJETO APARTIR DE UNA CLASE
const persona1 = new Persona();
console.log(persona1);

//cambiar ciudad
persona1.ciudad = "Barcelona";
console.log(persona1);//persona1 es un objeto

//agregar nuevo atributos
persona1.puesto = "developer";
console.log(persona1);

//agregar un array
persona1.telefonos = ["662585545", "662580399"];
console.log(persona1);
