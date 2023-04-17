
//Ejempo de clase con metodos encapsulados utilizndo getter and setter
//
class Persona {
  

    constructor(nombre, edad){
        this.nombre = nombre;
        this.#edad = edad;
    }

    //metodo publico
    enviarProductos(){
        //comprobar si eel envio es gratis
        let esAptoPorUbicacion = this.#comprobarUbicacion();
        let esAptoPorPrecioTotal1 = this.#comprobarPrecioTotal
    }
    

    //metodo privado
    #comprobarUbicacion(){

    }

    #comprobarPrecioLimite(){

    }
}

let persona1 = new Persona("persona1",20);
persona1.edad = 3; //asignacion directa, funciona si el atributo es publico
persona1.edad =25;
console.log(persona1.edad); // 3