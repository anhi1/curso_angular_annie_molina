// crear class Employee CON ATRIBUTO: id, firstName, salary, company

class Employee{
    //atributos
    id:number;
    firstName:string;
    salary:number;
    company: string;

    //constructor
    constructor(id: number, firstName: string, salary: number, company: string ){
        this.id =id;
        this.firstName = firstName;
        this.salary = salary;
        this.company = company;
    }

    //Metodos
    //no es necesario poner function

    saludar(): string{
        return `Hola mi nombre es ${this.firstName} y gano tanto ${this.salary}`;
    }

}
    const employee1 = new Employee(1,'employee1', 280000, 'Deloitte');
    console.log(employee1.salary);
    console.log(employee1.saludar());
    
    

