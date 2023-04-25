/*
Palabras reservada para interfaces:
interface
implements

*/
interface ISaludo{ //puedo poner atributos o metosdos
    //declarar metodos
    saludar(): string;
    despedirse(firstName:string): string;
}

class SaludoFormal implements ISaludo{ // implementa una interfaz
    saludar(): string {
        return "Estimados, nuenos dias";
    }
    despedirse(firstName: string): string {
        return `Hasta la proxima ${firstName}`;
    } 
}

class SaludoInformal implements ISaludo{
    saludar(): string {
        return "Que pasa gente";
    }
    despedirse(firstName: string): string {
        return `Chao ${firstName}`;
    }   
}

//Crear objeto

let saludo1: ISaludo = new SaludoFormal();
let saludo2: ISaludo = new SaludoInformal();

console.log(saludo1.saludar());
console.log(saludo2.saludar());
