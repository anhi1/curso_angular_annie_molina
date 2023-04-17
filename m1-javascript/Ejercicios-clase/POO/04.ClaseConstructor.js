class Vehiculo{
    constructor(fabricante, modelo, color, caballos){
        //estado de un objeto
        this.fabricante = fabricante;
        this.modelo = modelo;
        this.color = color;
        this.caballos = caballos;
        this.estaEncendido = false;//el coche incialmente esta apagado
        this.velocidad = 0;
    }

    //ESTO SON METODOS
    encender(){
        this.estaEncendido = true;
    }

    apagar(){
        this.estaEncendido = false;
    }
    
    acelerar(cantidad){

    //que pasa si se quiere acelerar pero el coche esta apagado

    if(!this.estaEncendido)// comprobar si está apagado
    return; 
    
        //TODO(para hacer) introudcir comparacion de limites inferiror y superior
        if (cantidad<=0) {
            return; //return vacio no devuelve nada - se marcha del metodo(es decir sale del metodo)
        }
        this.velocidad += cantidad;
    }

    frenar(cantidad){
        this.velocidad -= cantidad;
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

vehiculo1.frenar(20);
console.log(vehiculo1.velocidad);

//casos limites:

//que pasa si la cantidad acelerar es negativa
//que pasa si se quiere acelerar pero el coche esta apagado

//1.que pasa si la cantidad acelerar es negativa
console.log("comprobar acelerar con un nuemro negativo");
console.log(vehiculo1.velocidad);
vehiculo1.acelerar(-40);// En vez de restar, no hace nada, para evitar que la velocidad se quede negativa
console.log(vehiculo1.velocidad);// comprobar que la velocidad no cambia

// 2.que pasa si la cantidad a acelerar hace que se supere el limite de 120 km h 
if(this.velocidad + cantidad > 120){
   console.log("se ha excedido la velocidad maxima, se queda el el maximo de 120");
}

// qué pasa si se quierer acelerar pero el coche está apagado