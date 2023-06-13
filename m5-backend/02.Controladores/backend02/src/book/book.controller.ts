import { Controller, Get, Param } from '@nestjs/common';
import { IBook } from './book.model';

@Controller('books')
export class BookController {
  @Get()
  findAll(): IBook[] {
    let book1: IBook = {
      id: 1,
      title: 'Libro 1',
      price: 29.29,
    };
    let book2: IBook = {
      id: 2,
      title: 'Libro 2',
      price: 29.29,
    };
    return [book1, book2];
  }

  @Get(':id')
  findById(@Param('id') id: string):IBook {
    console.log(typeof(id));
    
    return {
        id: parseInt(id, 10), // base decimal
        title: 'Book',
        price: 30.0
    }
  }
}


