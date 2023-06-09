import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Book } from 'src/books/books.model';

@Module({
     imports: [
        TypeOrmModule.forRoot({ //pasarle atributos
            type:'mysql',
            host:'localhost',
            port: 3306,  // se puede cambiar la instalacion si deseas
            username: 'root',
            password: '2746',
            //process.env.NEST_PASSWORD, //sustituir por variable d entorno para que tu contraseña en gith nadie lo vea
            database: 'backend_nest',
            entities:[ //detecta que directorio estas
                //__dirname + '/../**/*.model.ts'
                Book
            ],
            synchronize: true, //genera tablas automaticante en base a entidades
            logging:true
            
        }) 
     ]
})
export class DatabaseModule {}
