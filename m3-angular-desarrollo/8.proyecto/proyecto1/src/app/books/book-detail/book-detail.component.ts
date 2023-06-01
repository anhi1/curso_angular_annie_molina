import { Component, OnInit } from '@angular/core';
import { IBook } from '../models/book.model';
import { BookService } from '../services/book.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit{

  book: IBook | undefined;

  constructor( private activatedRoute: ActivatedRoute,
              private bookService: BookService){}
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params =>{
      const id = parseInt(params['id'], 10); // 10 representa la base numérica 
      this.bookService.findById(id).subscribe(data => this.book= data);
    });
  }

}

//el active route me da el numero
