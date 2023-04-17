//ENCAPSULACION GETTER AND SETTERS
//# = es como privado(encapsulado), no lo puedo ejecutar fuera de la clase
// _ = no está encapsulado, no es privado

class Persona {
    #edad;

    constructor(nombre, edad){
        this.nombre = nombre;
        this.#edad = edad;
    }

    //1.getter: metodo para obtener atributos privados
    get edad(){
        return this.#edad;
    }

    //2.setter: se utiliza para modificar un atributo privado
    set edad(nuevaEdad){   //se utiliza para modificar un atributo privado
        if(nuevaEdad >=18)
        this.#edad = nuevaEdad;
    }

}

let persona1 = new Persona("persona1",20);
persona1.edad = 3; //asignacion directa, funciona si el atributo es publico
console.log(persona1.edad);
persona1.edad = 25;//Esta asignación invoca al método set automáticamente
console.log(persona1.edad); // 25
