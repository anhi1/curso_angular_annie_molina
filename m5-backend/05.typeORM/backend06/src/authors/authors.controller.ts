import { Body, Controller, Get, Post } from '@nestjs/common';
import { AuthorsService } from './authors.service';
import { Author } from './authors.model';

@Controller('authors')
export class AuthorsController {
    constructor(private authorService:AuthorsService){}

    @Get()
    findAll(): Promise<Author[]>{
        return this.authorService.findAll(); 
    }
    @Post()  //http://localhost:3000/books  / post / raw /body
     async create(@Body() author:Author): Promise<Author> {
        return await this.authorService.create(author);
    }
}
