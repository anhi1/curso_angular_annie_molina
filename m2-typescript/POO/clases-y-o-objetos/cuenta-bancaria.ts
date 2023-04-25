// constructor con atributos private

//id, tittular, saldo

class CuentaBancaria {
    constructor(private id:number,
                private titular:string,
                private fechaNacimiento:Date,
                private saldo:number,
                private pinAcceso:string){}
    
    //metodos
    public consultarSaldo(): number{
        return this.saldo;
    }

    public incrementarSaldo(cantidad: number):void{
        //1. Comprobar  cantidad debe ser mayor o igual que 5 euros
        if(cantidad >=5)
        this.saldo += cantidad;
    }
    public retirarSaldo(cantidad:number, pin:string): number { // te devuelve number
        //Comprobar PIN
        if (!this.esPinValido(pin) || !this.esMayorDeEdad() || cantidad > this.saldo) // con tal que una es verdadero entramos
        return 0; // si el pin es falso te devuelve 0

        this.saldo -=cantidad;
        return cantidad;
    }
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

    private esMayorDeEdad(): boolean {
        let birthYear = this.fechaNacimiento.getFullYear();
        let fechaActual = new Date();
        let currentYear = fechaActual.getFullYear();

       return currentYear - birthYear >= 18; //devuelve true es mayor de edad   
    }

    private esPinValido(pin: string): boolean{ //es de tipo string y luego tipo de retorno  es boolean
        return this.pinAcceso === pin;
    }
  
}

// CREAR OBJETOS
//1.Retirar dinero con pin incorrecto

const cuenta1 = new CuentaBancaria(1, 'PERSONA1', new Date("1990-01-01",), 800, '4552'); 
console.log(`cuenta1.retirarSaldo(3000,'1111'): ${cuenta1.retirarSaldo(3000, '1111')} `);

//let cantidadRetirada = cuenta1.retirarSaldo(1500);
//console.log(cantidadRetirada);

// 2. Retirar dinero siendo MENOR de edad
const cuenta2 = new CuentaBancaria(2, 'PERSONA2', new Date("2015-01-01"), 800, '4552');
console.log(`cuenta2.retirarSaldo(500, '4552'): ${cuenta2.retirarSaldo(500, '4552')}`); // 0


// 3. Cantidad menor que cero
const cuenta3 = new CuentaBancaria(3, 'PERSONA3', new Date("2000-01-01"), 800, '4552');
console.log(`cuenta3.retirarSaldo(-30, '4552'): ${cuenta3.retirarSaldo(-30, '4552')}`); // 0


// 4. Cantidad mayor que saldo

const cuenta4 = new CuentaBancaria(4, 'PERSONA4', new Date("2000-01-01"), 800, '4552');
console.log(`cuenta4.retirarSaldo(1500, '4552'): ${cuenta4.retirarSaldo(1500, '4552')}`); // 0


// 5. Escenario OK

const cuenta5 = new CuentaBancaria(5, 'PERSONA5', new Date("2000-01-01"), 800, '4552');
console.log(`cuenta5.retirarSaldo(500, '4552'): ${cuenta5.retirarSaldo(500, '4552')}`); // 500

// Consultar saldo

console.log(`cuenta5.consultarSaldo(): ${cuenta5.consultarSaldo()}`) // te resta segun lo que has retirado antes




