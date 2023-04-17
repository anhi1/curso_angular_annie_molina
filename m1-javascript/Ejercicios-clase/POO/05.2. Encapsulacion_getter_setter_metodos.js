
//- Ejempo de clase con metodos encapsulados utilizando getter and setter
//  cuando un metodo publico se hace grande es mejor desglosarlo en 
//  metodos manejables, esos metodos mas pequeños pueden ser privados 
//  para que no se accedadn de forma directa.

class Ecommerce {

    
    enviarProductos(){ //metodo publico que se va ha desglosar
        //comprobar si el envio es gratis
        let esAptoPorUbicacion = this.#comprobarUbicacion(); //metodos pequeños privados
        let esAptoPorPrecioTotal = this.#comprobarPrecioTotal();
    }

    #comprobarUbicacion(){ //metodo privado para que no accedan desde afuera, solo desde otro metodos de la misma clase
        console.log("comprobar ubiciacion del cliente");
    }

    #comprobarPrecioTotal(){
        console.log("comprobar precio total del carrito de la compra");
    }

}

//creacion de objetos
let tiendaDeBarrio = new Ecommerce();
tiendaDeBarrio.enviarProductos();
// tiendaDeBarrio.#comprobarPrecioTotal(); // Property '#comprobarPrecioTotal' is not accessible outside class 'Ecommerce' because it has a private identifier.


