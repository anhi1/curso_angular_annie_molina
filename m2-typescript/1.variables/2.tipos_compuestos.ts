/*
Tipos de datos compuestos
*/


//tuplas
let empleado1: [number, string, number, Date] = [1,'Juanito', 30, new Date("2000-01-01")]
console.log(typeof empleado1);

//enums: agrupacion de constantes(valores fijos) ejemp dias de semana, meses del año
//ejm estado de una tarea,
//es de tipo ahorro o de inversion...
enum AcountType{
    Saving,
    Investment,
    Company
}
let cuentaBancarial1: AcountType = AcountType.Company;
let cuentaBancarial2: AcountType = AcountType.Saving;
let cuentaBancarial3: AcountType = AcountType.Investment;

console.log(cuentaBancarial1);
console.log(cuentaBancarial2);
console.log(cuentaBancarial3);

//object 



