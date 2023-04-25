/*
-crear interface sin metodos, solo atributos
- si queremos objetos "modelos de datos" que implennbte tiene atributos
MVC - modelo vista controlador
*/
//
interface IBook{
    id:number;
    title:string;
    author:string;
    year:number;
    editorial:string;
    numPages: number;
}

//crear objetos  de tipo book sin clases
let book1:IBook = {
    id: 1,
    title: "book1",
    author: "author1",
    year: 2023,
    editorial: "Planeta",
    numPages: 345
}
console.log(book1.title);


let book2:IBook ={
    id: 2,
    title: "book2",
    author: "author1",
    year: 2024,
    editorial: "Maning",
    numPages: 422
}
console.log(book2.title);


