/*
Tipos de datos compuestos
array
tuplas
enum
object
*/


let nifs:string[] = ['43535345G', '7345435Y', '24354353F'];
console.log(nifs.length);

nifs.push('53599345L');
console.log(nifs);
console.log(nifs.length);

let cosas:any[] = ['83235345L',2 , true]
console.log(cosas.length);

let names: Array<string> = ['Ana', 'Carol', 'Betty'];
let precios: Array<number> =[25, 89, 233]



//tuplas
let empleado1: [number, string, number, Date] = [1,'Juanito', 30, new Date("2000-01-01")]
console.log(typeof empleado1); //object

//El método hasOwnProperty() devuelve un booleano indicando si el objeto tiene la propiedad especificada.

for (const key in empleado1) {
    if (Object.prototype.hasOwnProperty.call(empleado1, key)) {
        const element = empleado1[key];
        console.log(element);
    }
}
 let contacto:[string, string] = ['user1@gmail.com', '76566777']


//enums: agrupacion de constantes(valores fijos) ejemp dias de semana, meses del año
// limita el numero de opciones a las opciones que hay dentro del enum
//es de tipo ahorro o de inversion...
enum AcountType{
    Saving,
    Investment,
    Company
}
let cuentaBancarial1: AcountType = AcountType.Company; //posicion 2
let cuentaBancarial2: AcountType = AcountType.Saving; // 0
let cuentaBancarial3: AcountType = AcountType.Investment; //1

console.log(cuentaBancarial1);
console.log(cuentaBancarial2);
console.log(cuentaBancarial3);
console.log(typeof cuentaBancarial1); //number

console.log(cuentaBancarial1 === AcountType.Company); // true
//console.log(cuentaBancarial1 === AcountType.saving);// false

enum WeekDays {
    MONDAY,
    TUESDAY,
    WEDNESDAY,
    //...
}

// OBJECT
 let persona: object = {
    firstName: 'Ejemplo nombre',
    lastName: 'Ejemplo apellido'
 }

 console.log(typeof persona);
 console.log(persona);
 
 

