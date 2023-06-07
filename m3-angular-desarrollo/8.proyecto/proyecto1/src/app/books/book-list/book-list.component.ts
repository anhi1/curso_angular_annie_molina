import { Component, OnInit } from '@angular/core';
import { BookService } from '../services/book.service';
import { IBook } from '../models/book.model';
import { AuthorService } from 'src/app/authors/services/author.service';
import { IAuthor } from 'src/app/authors/models/author';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
})
export class BookListComponent implements OnInit {
  displayedColumns: string[] = [
    'title',
    'sinopsis',
    'release',
    'numPages',
    'price',
    'actions',
  ];
  books: IBook[] = [];
  authors: IAuthor[] = [];

  constructor(
    private bookService: BookService,
    private authorService: AuthorService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      const idString = params['authorId'];
      if (idString) {  //verifico si exsite un id
        const id = parseInt(idString, 10);
        this.bookService.findAllByAuthorId(id).subscribe((data) => (this.books = data));
      } else {
        this.bookService.findAll().subscribe((data) => (this.books = data));
      }
    });

    
    this.authorService.findAll().subscribe((data) => (this.authors = data));
  }

  deleteBook(book: IBook) {}
  this.bookService.deleteById(book.id).subscribe(response => {//voy ha recibir un arespuesta donde voy ha sacr de satatus
    next: if(response.status === 200 || response.status === 204){ //next cuando todo va bien
      console.log("se ha borrado correctamente");
    }else{
      console.log("se ha producido un error");
    
      
    });
    error: (error) =>
}
