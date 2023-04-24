// constructor con atributos private

//id, tittular, saldo

class CuentaBancaria{
    constructor(private id:number,
                private titular:string,
                private fechaNacimiento:Date,
                private saldo:number,
                private pinAcceso:string){}

    public incrementarSaldo(cantidad: number):void{
        //1. Comprobar  cantidad debe ser mayor o igual que 5 euros
        if(cantidad >=5)
        this.saldo += cantidad;
    }
    public retirarSaldo(cantidad:number, pin:string): number { // te devuelve number
        //Comprobar PIN
        if (!this.esPinValido(pin) || !this.esMayorDeEdad() || cantidad > this.saldo) // con tal que una es verdadero entramos
        return 0; // si el pin es falso te devuelve 0

    
        /*
        // 1. comprobar que la cantidad no sea superior al saldo, en ese caso retiramos
        if(cantidad > this.saldo){
            let saldoAux = this.saldo // lo guardamos en una variable auxialiar
            this.saldo = 0;
            return saldoAux;
        }
        this.saldo -= cantidad;
        return cantidad;   
    }
    */

     private esMayorDeEdad(): boolean{
        //fecha nacimiento 
        //fecha actual
        let birthYear = this.fechaNacimiento.getFullYear();
        let fechaActual = new Date();
        let currentYear = fechaActual.getFullYear();

       return currentYear - birthYear >= 18; //devuelve true es mayor de edad
     }

     private esPinValido(pin: string):boolean{ //es de tipo string y luego tipo de retorno  es boolean
        return this.pinAcceso === pin;
     }

    
}
// crear objetos

const cuenta1 = new CuentaBancaria(1, 'PERSONA1', new Date("1990-01-01",),1000,'4552'); 

//let cantidadRetirada = cuenta1.retirarSaldo(1500);
//console.log(cantidadRetirada);

let cantidadRetirada = cuenta1.retirarSaldo(300);



