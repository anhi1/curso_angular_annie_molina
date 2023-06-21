import { Module } from '@nestjs/common';
import { BooksController } from './books.controller';
import { BooksService } from './books.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Book } from './books.model';

@Module({
  imports: [TypeOrmModule.forFeature([Book])], // forFeature configura la tabla de libros
  controllers: [BooksController],
  providers: [BooksService]
})
export class BooksModule {}
