import { Controller, Get } from '@nestjs/common';
import { IBook } from './book.model';

@Controller('books')
export class BookController {

    @Get()
    findAll(): IBook[]{
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
        return[book1, book2]
    }
}
