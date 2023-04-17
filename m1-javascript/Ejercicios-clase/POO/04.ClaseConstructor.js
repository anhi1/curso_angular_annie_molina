class Vehiculo{
    constructor(fabricante, modelo, color, caballos){
        //estado de un objeto
        this.fabricante = fabricante;
        this.modelo = modelo;
        this.color = color;
        this.caballos = caballos;
        this.estaEncendido = false;//el coche incialmente esta apagado
        this.velocidad =velocidad;
    }

    //ESTO ES UNA FUNCION
    encender(){
        this.estaEncendido = true;
    }

    apagar(){
        this.estaEncendido = false;
    }
    
    acelerar(cantidad){
        this.velocidad += cantidad;
    }

    frenar(cantidad){
        this.velocidad += cantidad;
    }
}

let vehiculo1 = new Vehiculo("Toyota","Prius", "rojo", "120");
console.log(vehiculo1.estaEncendido);

vehiculo1.encender();
console.log(vehiculo1.estaEncendido);

vehiculo1.apagar();
console.log(vehiculo1.estaEncendido);

console.log(vehiculo1.velocidad);
vehiculo1.acelerar(50);
console.log(vehiculo1.velocidad);

