import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { BooksService } from './books.service';
import { Book } from './books.model';

@Controller('books')
export class BooksController {

    constructor(private bookService:BooksService){} //el controlador llama al servicio, añadimos el servicio

    @Get()
    findAll(): Promise<Book[]>{
        return this.bookService.findAll(); 
    }

    @Get('load-relations')
    findAllWithRelations(): Promise<Book[]>{
       return this.bookService.findAllWithRelations();
    }

    @Get('proyections')
    findAllProyections(): Promise<Book[]>{
         return this.bookService.findAllProyections(); 
    }

    @Get('author/:authorId')
    findAllByAuthorId(): Promise<Book[]>{
       return this.bookService.findAllByAuthorId(2);
    }

    @Get('id/:id')
    findById(@Param("id") id: number): Promise<Book |null>{
        return this.bookService.findById(id);
    }

    @Get('title-eq/:title') // /title/libro de annie
    findAllByTitleEquals(@Param("title") title: string): Promise<Book[]>{
        return this.bookService.findAllByTitleEquals(title);
    }

    @Get('title-like/:title')// que tengan la misma palabra //todos que contengan la misma plabra libro
    findAllByTitlelike(@Param("title") title: string): Promise<Book[]>{
        return this.bookService.findAllByTitleLike(title);
    }

    @Get('price/min/:min/max/:max')
    findAllByPriceBetween(
        @Param('min') min:number,
        @Param('max') max:number): Promise<Book[]>{
            return this.bookService.findAllByPriceBetween(min, max);
    }

    @Get('published')
    findAllByPublishedTrue(): Promise<Book[]>{
        return this.bookService.findAllByPublishedTrue();
    }
    
    @Get('quantity/:quantity/price/:price')
    findAllByQuantityAndPrice(
        @Param('quantity') quantity: number,
        @Param('price') price:number): Promise<Book[]>{
            return this.bookService
            .findAllByQuantityAndPrice(quantity, price);
        }

    @Get('ordered-by-price-asc')
    findAllOrderByPriceAsc(): Promise<Book[]> {
        return this.bookService.findAllOrderByPriceAsc();
    }


    @Post()  //http://localhost:3000/books  / post / raw /body
     async create(@Body() book:Book): Promise<Book> {
        return await this.bookService.create(book);
    }
    

    //Put /body / raw
    @Put()
    async update(@Body() book:Book): Promise<Book>{
        return await this.bookService.update(book);
    }
    
    @Delete(':id') // //http://localhost:3000/books/1
     async deleteById(@Param('id', ParseIntPipe) id:number): Promise<void>{
       return await this.bookService.deleteById(id);
    }
    
    @Delete('author-id/:authorId') // DELETE /NONE   //http://localhost:3000/author-id/1
    async deleteAllByAuthorId(
        @Param('authorId', ParseIntPipe) authorId: number
    ): Promise<void> {
        return await this.bookService.deleteAllByAuthorId(authorId);
    }
}


