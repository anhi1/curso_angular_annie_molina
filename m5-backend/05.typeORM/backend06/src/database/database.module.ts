import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Author } from 'src/authors/authors.model';
import { Book } from 'src/books/books.model';
import { Category } from 'src/categories/categories.model';
import { Editorial } from 'src/editorials/editorials.model';
import { Location } from 'src/locations/locations.model'
import { User } from 'src/users/users.model';

@Module({
     imports: [
        TypeOrmModule.forRoot({ //pasarle atributos
            type:'mysql',
            host:'localhost',
            port: 3306,     // se puede cambiar la instalacion si deseas
            username: 'root',
            password: '2746',    //process.env.NEST_PASSWORD, //sustituir por variable d entorno para que tu contraseña en gith nadie lo vea
            database: 'backend_nest',
            entities:[    //detecta que directorio estas   //__dirname + '/../**/*.model.ts'
                Book, Author, Editorial, Location, Category, User
            ],
            synchronize: true,  //genera tablas automaticante en base a entidades
            logging:true
            
        }) 
     ]
})
export class DatabaseModule {}
