import { MovieDatabase } from "./MovieDatabase";
import { IMovie } from "./movie";

const movieDatabase = new MovieDatabase();

let movie1: IMovie = {
    id: 1,
    title:'Algo pasa con Mary',
    year:1998,
    director:'string',
    duration:90,
    genres:['romantico', 'comedia'],
    rate:5
    
}

let movie2 : IMovie ={
    id:2,
    title:'El señor de los anillos',
    year: 2001,
    director:'Peter Jackson',
    duration: 178,
    genres: ['fantasia heroica', 'fantasia' ],
    rate:8
}

let movie3 : IMovie ={
    id:3,
    title:'King Kong',
    year: 2005,
    director:'Peter Jackson',
    duration: 187,
    genres: ['aventura', 'drama', 'romance', 'accion' ],
    rate:7
}