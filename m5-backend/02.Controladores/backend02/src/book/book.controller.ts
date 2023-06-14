import { Body, ConflictException, Controller, Delete, Get, HttpCode, NotFoundException, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
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

  /*@Get(':id')
  findById(@Param('id', ) id: string):IBook {
    console.log(typeof(id));
    
    return {
        id: parseInt(id, 10), // base decimal
        title: 'Book',
        price: 30.0
    }
  }
  */

  @Get(':id')
  findById(@Param('id', ParseIntPipe) id: number): IBook {
    console.log(typeof id); //number
    return {
      id: id, // base decimal
      title: 'Book',
      price: 30.0,
    };
  }

  // Post create() http://localhost:3000/books
  @Post()
  create(@Body() book: IBook): IBook { // añadir Auto-Validadacion
    book.id = 1;
    return book;
    // validar el libro
      // si es correcto
        // this.bookService.save
      // si no es correcto
        // throw new BadRequestExeption
  }

  // Actualizar informacion en base de datos / // Actualizar en base de datos
  @Put()
  update(@Body() book: IBook): IBook {
    // Buscar  comprobar si existe el libro
    if (false)// true si existe el libro //si no hay libro no actualizamos
      throw new NotFoundException('Book Not Found'); // 404
    // Actualizar en base de datos
    return book; //200
  }


  @Delete(':id') // delete none
  @HttpCode(204)  // cambia el status 200 por defecto a 204
  deleteById(@Param('id', ParseIntPipe) id: number){
    if(false) // si no hay libro no actualizamos  // true no se puede borrar
    throw new NotFoundException('Entity Book not found, cant delete!');
    try{
      //this.bookService.deleteById(id)  // Borrar libro base de datos
    } catch (error){
      throw new ConflictException('No se puede borrar el libro');
    }
   
  }
}


