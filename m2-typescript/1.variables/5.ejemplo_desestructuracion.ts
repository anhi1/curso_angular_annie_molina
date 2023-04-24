//objeto con sus propiedades
const person = {
    firstName: 'Jhon Doe',
    age: 30,
    //composition
    address:{
        city:'New York',
        country:'USA'
    }
}

console.log(person.address.city);

//desestructuracion
let {firstName, age} = person; //asignaos al objeto persona // Para cambiar nombre de la variable ejm let {firstName: cambiaNombre, age}
console.log(firstName);

let {address:{city}} = person;
console.log(city);


