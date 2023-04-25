//crear objetos

import { ICategory } from "./category.model";
import { IFilm } from "./film.model";

let comedia:ICategory ={
    id: 1,
    fullName: "Comedia española",
    color: "verde",
    minAge: 7
}

let drama:ICategory ={
    id: 2,
    fullName: "Drama", // columna
    color: "rojo", // columna
    minAge: 12
}
let titani: IFilm ={
    id:1,
    title: "titanic",
    minutes:120,
    rating:9.9,
    year:1997,
    categories:[comedia, drama] //Many
}
let aTodoGas:IFilm ={
    id: 2,
    title: "A todo Gas 1",
    minutes: 120,
    rating: 9.0,
    year: 2002,
    categories: [comedia, accion]
}

//Bidireccional (opcional)
comedia.films =[]
comedia.films?.push(aTodoGas);



