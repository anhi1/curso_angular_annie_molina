
/*
Ejemplo de uso del modificador de acceso public

cuando tenemos modificadores de acceso como por ejemplo public y private en los atributos podemos
ponerlo en el costructor y no haria falta añadirlos fuera del constructor
y escribir la signacion this de cada atributo
*/
class Company {
    //constructor
    constructor(public id: number,
                public cif: string,
                public legalName: string,
                public income: number,
                public outcome: number){}

    //metodos            
    getFullName(): string {
        return `${this.cif} ${this.legalName}`;
    }

    getNetIncome(): number{
        return this.income - this.outcome;
    }
}

const company1 = new Company(1,'73646744', 'DESARROLLOS COSMICOS SL', 500000, 25000);
console.log(company1.getFullName());
console.log(company1.getNetIncome());
console.log(company1.outcome);

company1.legalName = "OTRA EMPRESA SL"; //CAMBIAMOS EL NOMBRE
console.log(company1.legalName);


