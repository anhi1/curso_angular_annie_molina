import { Injectable } from '@nestjs/common';
import { IBook } from './book.model';

@Injectable()
export class BookService {
    private books:IBook[] = [
        { id: 1, title: 'Book 1', price: 49.99},
        { id: 2, title: 'Book 2', price: 49.99},
        { id: 3, title: 'Book 3', price: 49.99},
        { id: 4, title: 'Book 4', price: 49.99},
    ];

    constructor(){  //nos da el acceso de base de datos    
    }

    findAll(): IBook[] {
        return this.books;
    }

    findById(id: number): IBook | undefined {
    return this.books.find(book => book.id === id);  //find devuelve un objeto
      
    }

    findAllByTitle(title:string):IBook[]{
      return this.books.filter(book =>
         book.title.toLowerCase().includes(title.toLowerCase())); // filter devuelve
    }

    public save(book:IBook): IBook{
        this.books.push(book);
        return book;
    }

    public update(book: IBook): IBook {
        let position = this.books.findIndex(
          current => current.id === book.id
        );
        if (position === -1)
          throw new Error("No existe el elemento"); // si no existe el elemento te lanza un error
    
        this.books[position].title = book.title;
        this.books[position].price = book.price;
        return book;
      }



      public deleteById(id: number): boolean {
        let position = this.books.findIndex(
          current => current.id === id
        );
        if (position === -1) throw new Error("404 not found");
        return this.books.splice(position, 1).length === 1; // length === 1 quiere decir que se ha borrado un objeto: truev
      }

      deleteAll(){
        this.books = [];
      }

}
