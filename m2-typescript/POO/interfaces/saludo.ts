/*
Palabras reservada para interfaces:
interface
implements

*/
interface ISaludo{ //puedo poner atributos o metodos
    //Declarar metodos (las acciones que se pueden hacer)
    //esto es una interfaz comun
    saludar(): string;
    despedirse(firstName:string): string;
}


//CREAR clases implemenando una interfaz: ambas hacen lo mismo pero de distintas maneras
class SaludoFormal implements ISaludo{
    saludar(): string {
        return "Estimados, buenos dias";
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

//crear objeto
let saludo1:ISaludo = new SaludoFormal(); // es de tipo Isaludo
let saludo2:ISaludo = new SaludoInformal();
console.log(saludo1.saludar());
console.log(saludo2.saludar());

