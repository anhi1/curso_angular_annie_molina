import { MovieDatabase } from "./MovieDatabase";
import { IMovie } from "./movie";

const movieDatabase = new MovieDatabase();

let movie1: IMovie = {
    id: -1,
    title:'Algo pasa con Mary',
    year:1998,
    director:'director1',
    duration:90,
    genres:['romantico', 'comedia'],
    rate:5
    
}

let movie2 : IMovie ={
    id: -1,
    title:'El señor de los anillos',
    year: 2001,
    director:'Peter Jackson',
    duration: 178,
    genres: ['fantasia heroica', 'fantasia' ],
    rate:8
}

let movie3 : IMovie ={
    id: -1,
    title:'King Kong',
    year: 2005,
    director:'Peter Jackson',
    duration: 187,
    genres: ['aventura', 'drama', 'romance', 'accion' ],
    rate:7
}

//------------findAll()-------------

console.log(movieDatabase.findAll());// vacio []

//--------- save() ------------------

console.log(movieDatabase.save(movie1));
console.log(movieDatabase.save(movie2));
console.log(movieDatabase.save(movie3));

//------------findAll()-------------

console.log(movieDatabase.findAll());

//----------findAllByActor()--------

let actor = movieDatabase.findAllByActor('Peter Jackson');
console.log(actor);


//---------- update --------------
console.log(movieDatabase.filterById(1));
let pelicula1:IMovie = {
    id: 1,
    title:'TILULO CAMBIADO',
    year:1998,
    director:'director1',
    duration:90,
    genres:['ROMANCE'],
    rate:5
}
let modificado = movieDatabase.update(pelicula1);
console.log(modificado);
console.log(movieDatabase.findAll());


//------------ delete --------


