import { IFilm } from "./film.model"

/*
REpresenta categoria o genero de pelicula, por ejemplo: comedia,ciencia, ficcion, etc
*/
export interface ICategory{
    id:number,
    fullName:string,
    color:string,
    minAge: number,
    films?: IFilm[]
}