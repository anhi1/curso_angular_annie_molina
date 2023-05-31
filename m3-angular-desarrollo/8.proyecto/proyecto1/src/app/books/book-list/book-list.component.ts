import { Component, OnInit } from '@angular/core';
import { BookService } from '../services/book.service';
import { IBook } from '../models/book.model';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit{

  constructor(private bookService: BookService){}
  books: IBook[] =[];

  ngOnInit(): void {
    this.bookService.findAll().subscribe(data =>this.books = data);
  }


}
