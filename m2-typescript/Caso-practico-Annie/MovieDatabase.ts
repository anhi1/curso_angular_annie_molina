import { IMovie } from "./movie";

export class MovieDatabase {
  private movies: Array<IMovie> = [];
  private blackwords: string[] = ["prohibido1", "prohibido2", "prohibido3"];

  //METODOS

  /*
  insert(id:number):number[] {
    this.movies.splice(movieIndex, 1);
    return [];
  }
  */

  public findById(id:number): IMovie | undefined {
    return this.movies.find(movie => movie.id === id);
  }

  public findAll(): Array<IMovie> {
    return new Array(...this.movies); // devolver una copia del array events
  }

  private generateNextId(): number {
    let maxId = 0;
    for (const movie of this.movies) {
      if (movie.id > maxId) maxId = movie.id;
    }
    return ++maxId;
  }

  private isValid(movie: IMovie): boolean {
    // validación 1: title tenga longitud entre 8 y 40
    if (movie.title.length < 8 || movie.title.length > 40) return false;

    //validacion 2 : que titulo no este ocupado
    for (const currentMovie of this.movies)
      if (currentMovie.title === movie.title) return false;

    //validacion 3: title no contenga una palabra prohibida
    for (const word of this.blackwords)
      if (movie.title.includes(word)) return false;

    return true;
  }

  public filterByActor(director:string): Array<IMovie>{
    return this.movies.filter(movie => movie.director === director);
  }
  public update(movie: IMovie): IMovie {
    if (!movie.id) throw new Error("El id tiene que ser valido");

    let position = this.movies.findIndex(
      (currentMovie) => currentMovie.id === movie.id
    );
    if (position === -1)
      // si no existe el elemento te lanza un error
      throw new Error("No existe el elemento");

    if (this.isValid(movie)) this.movies[position].title = movie.title;
    this.movies[position].director = movie.director;
    this.movies[position].duration = movie.duration;
    return movie;
  }


  public deleteById(id: number): boolean {
    let position = this.movies.findIndex(
      (currentMovie) => currentMovie.id === id
    );

    if (position === -1) throw new Error("No existe el elemento");
    return this.movies.splice(position, 1).length === 1; // length === 1 quiere decir que se ha borrado un objeto: truev
  }

  public deleteAll(movie: IMovie): Array<IMovie> {
    return (this.movies = []);
  }


}


/*
addTarea(tarea){
        tarea.id = this.#generateId();
        this.tareas.push(tarea);
        return tarea.id;
    }
*/