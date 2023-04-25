

function imprimirSaludo(firstName:string):void{
    console.log(`hello ${firstName}`);
    
}
imprimirSaludo('annie');



function saludar(firstName:string):string{
    return `hola, ${firstName}`;
}
let saludo:string = saludar('patty');
console.log(saludo);


function getFullName(firstName:string,
                     lastName: string,
                     edad:number,
                     inscrito:boolean):string{
    return` hola ${firstName} ${lastName} con edad ${edad} tu inscripcion esta en estado ${inscrito},`
}                                        


let datoCompleto: string = getFullName('annie', 'molina', 29, true);
console.log(datoCompleto);
console.log(typeof datoCompleto);


