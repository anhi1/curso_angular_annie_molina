import { Controller, Param, ParseIntPipe } from '@nestjs/common';
import { BookingsService } from './bookings.service';

@Controller('bookings')
export class BookingsController {
    constructor(private bookingService: BookingsService){}

    @Get('user/:useId')
    @Param("userId", ParseIntPipe)
    findAllByUserId(): Promise<Book[]>{
       return this.bookService.findAllByAuthorId(2);
    }

    @Post()  //http://localhost:3000/books  / post / raw /body
     async create(@Body() book:Book): Promise<Book> {
        return await this.bookService.create(book);
    }
}
