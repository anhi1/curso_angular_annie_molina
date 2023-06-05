import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IBook } from '../models/book.model';
import { Router } from '@angular/router';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css'],
})
export class BookFormComponent {
  bookForm = new FormGroup({
    title: new FormControl('', [Validators.required,Validators.minLength(5),Validators.maxLength(100),]),
    sinopsis: new FormControl('', [Validators.maxLength(1000)]),
    //release: new FormControl(null, [Validators.required]),
    //numPages: new FormControl(0, [Validators.required, Validators.min(30)]),
    //price: new FormControl(0, [Validators.required,Validators.min(5),Validators.max(500),]),
  });

  constructor(private bookService: BookService, private router: Router){}

  save(): void {
    //ectraer los satos del fomluario
    let title = this.bookForm.get('title')?.value; //? q no es definido, te va dar un titulo
    let sinopsis = this.bookForm.get('sinopsis')?.value;

    //crear un objto  //Todo añadir validacion extra de datos, si alguno esta mal hacer return y mostrar y no guardar
    let book: IBook = {
      id: 0,
      title: title ?? '',
      sinopsis: sinopsis ?? '',
      release: new Date(),
      numPages: 0,
      photo: '',
      price: 0,
      authorId: 0,
    };

    //mandar a guarda el objeto en una base, lego navegamos a la panatalla onde esta le libro
    this.bookService.create(book).subscribe(book => this.router.navigate(['/books', book.id]));
  }
}
