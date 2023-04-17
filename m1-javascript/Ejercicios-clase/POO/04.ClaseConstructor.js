//EJEMPLO DE CLASE CON CONSTRUTOR Y METODOS

const MAX_SPEED = 120;
class Vehiculo {
    constructor(fabricante, modelo, color, caballos){
        //estado de un objeto
        this.fabricante = fabricante;
        this.modelo = modelo;
        this.color = color;
        this.caballos = caballos;
        this.estaEncendido = false;//el coche incialmente esta apagado
        this.velocidad = 0;
    }

    //ESTO SON METODOS O COMPORTAMIENTOS
    encender(){
        this.estaEncendido = true;
    }

    apagar(){
        this.velocidad = 0;
        this.estaEncendido = false;
    }
    
    acelerar(cantidad){

        
        if(!this.estaEncendido)//que pasa si se quiere acelerar pero el coche esta apagado - comprobar que este apagado
            return; 
        
        if (cantidad<=0) //1. Que pasa si la cantidad acelerar es negativa
            return; //return vacio no devuelve nada - sale del metodo
        
        //2. que pasa si la cantidad a acelerar hace que se supere el limite de 120km h
        //en ese caso dejaremos 120, peo no debe sobrepasar el limite
        if (this.velocidad + cantidad > MAX_SPEED){
        console.log("se ha excedido la velocidad maxima");
        this.velocidad = MAX_SPEED;
        return;
        }
        this.velocidad += cantidad; // se suma la cantidad poruqe aceleras aumentas
    }    


    frenar(cantidad){
        //TODO(para hacer) introducir comparacion de limites inferior y superior
        this.velocidad -= cantidad;
    }
}

let vehiculo1 = new Vehiculo("Toyota","Prius", "rojo", "120");
console.log(vehiculo1.estaEncendido);//false

vehiculo1.encender();
console.log(vehiculo1.estaEncendido);//true

vehiculo1.apagar();
console.log(vehiculo1.estaEncendido);//false

vehiculo1.encender();

console.log(vehiculo1.velocidad);
vehiculo1.encender();
vehiculo1.acelerar(50); //50km/k
console.log(vehiculo1.velocidad);

//vehiculo1.frenar(20);
//console.log(vehiculo1.velocidad); // 30 km/h

//CASOS LIMITE:

//1. Que pasa si la cantidad a acelar es negativa

console.log("comprobar acelerar con un numero negativo");
console.log(vehiculo1.velocidad);
vehiculo1.acelerar(-40);
console.log(vehiculo1.velocidad); //comprobamos que la velocidad n cambia

//2. que pasa si la cantidad a acelerar hace que se supere el limite de 120 km h
console.log("comprobar acelerar mas de 120");
vehiculo1.acelerar(240);
console.log(vehiculo1.velocidad);

//3. Apagar el coche y volver a acelerar
console.log(" Comprobar con el coche apagado");
vehiculo1.apagar(); 
console.log(vehiculo1.velocidad);//0

vehiculo1.acelerar(50);//0
console.log(vehiculo1.velocidad);//0

