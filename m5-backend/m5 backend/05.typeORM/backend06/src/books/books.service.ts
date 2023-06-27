import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { Book } from './books.model';
import { InjectRepository } from '@nestjs/typeorm';
import { Between, ILike, Long, MoreThanOrEqual, Repository } from 'typeorm';
import { CategoriesService } from 'src/categories/categories.service';


@Injectable()
export class BooksService {
  constructor(
    @InjectRepository(Book) private bookRepo: Repository<Book>,
    private categoryService: CategoriesService,
  ) {}

  findAll(): Promise<Book[]> {
    // SELECT * FROM books;
    return this.bookRepo.find();
  }

  findAllWithRelations(): Promise<Book[]> {
    return this.bookRepo.find({
      relations: {
        author: true,
        editorial: true,
        categories: true,
      }
    });
  }

  findAllProyections(): Promise<Book[]> {
    return this.bookRepo.find({
      select: {
        // select es un atributo
        id: true,
        isbn: true,
        author: {
          id: true,
          name: true,
        },
      },
      relations: {
        author: true,
      },
    });
  }

  //lo mismo para editorial findAllByEditorialId
  findAllByAuthorId(authorId: number): Promise<Book[]> {
    return this.bookRepo.find({
      relations: {
        author: true,
      },
      where: {
        author: {
          id: authorId,
        },
      },
    });
  }


  findById(id: number): Promise<Book | null> {
    // SELECT * FROM books Where id = 1;
    console.log(id);
    return this.bookRepo.findOne({
      where: {
        id: id
      }
    });
  }

  

  findAllByTitleEquals(title: string): Promise<Book[]> {
    console.log(title);
    return this.bookRepo.find({
      where: {
        title: title, //coincidencia extacta
      },
    });
  }

  findAllByTitleLike(title: string): Promise<Book[]> {
    console.log(title);
    return this.bookRepo.find({
      where: {
        title: ILike(`%${title}%`), // mayusculas // contenga una palabra
      },
    });
  }

  findAllByPriceBetween(minPrice: number, maxPrice: number): Promise<Book[]> {
    console.log(minPrice);
    console.log(maxPrice);

    return this.bookRepo.find({
      where: {
        price: Between(minPrice, maxPrice),
      }
    });
  }

  findAllByPublishedTrue(): Promise<Book[]> {
    return this.bookRepo.find({
      where: {
        published: true,
      },
    });
  }

  findAllByQuantityAndPrice(quantity: number, price: number): Promise<Book[]> {
    return this.bookRepo.find({
      where: {
        quantity: MoreThanOrEqual(quantity),
        price: MoreThanOrEqual(price),
      },
    });
  }

  // findAllOrderByPriceAsc
  findAllOrderByPriceAsc(): Promise<Book[]> {
    return this.bookRepo.find({
      order: {
        price: 'ASC',
      },
    });
  }

  // create / await = tienes que esperar hasta q el metodo haga algo
  async create(book: Book): Promise<Book> {
    try {
      return await this.bookRepo.save(book);
    } catch (error) {
      console.log(error.message);
      throw new ConflictException('No se ha podido guardar el libro');
    }
  }

  //update // PUT actualizar
  async update(book: Book): Promise<Book> {
    let bookFromDB = await this.bookRepo.findOne({
      where: {
        id: book.id,
      }
    });

    if (!bookFromDB) throw new NotFoundException('libro no encontrado');

    try {
      console.log(book); // agregamos el log para encontrar el error
      bookFromDB.price = book.price;
      bookFromDB.published = book.published;
      bookFromDB.quantity = book.quantity;
      bookFromDB.title = book.title;
      bookFromDB.author = book.author;
      bookFromDB.editorial = book.editorial;

      //Opcion 1: buscar las categorias
      //let categoryIds = book.categories.map(cat => cat.id);
      // let categories = await this.categoryService.findAllByIds(categoryIds);
      //bookFromDB.categories = categories;

       // Opción 2: cargar las categorías directamente
      bookFromDB.categories = book.categories;
            return await this.bookRepo.save(bookFromDB);

      } catch (error) {
            console.log(error);
            throw new ConflictException('Error actualizando el libro');
      }
    }


  // DELETE /  BODY / NONE
  async deleteById(id: number): Promise<void> {
    //comrpueba si existe esa entidad
    let exist = await this.bookRepo.exist({
      where: {
        id: id
      }
    });


    if (!exist) throw new NotFoundException('Not found');
    try {
      await this.bookRepo.delete(id);
    } catch (error) {
      throw new ConflictException('No se puede borrar');
    }
    
  }


//antes de borrar el autor borras sus libros
 

    async deleteAllByAuthorId(authorId: number) {

      // Opcion 1
      // let books = await this.bookRepo.find({
      //     select: {
      //         id: true            
      //     },
      //     relations: {
      //         author: false
      //     },
      //     where: {
      //         author: {
      //             id: authorId
      //         }
      //     }
      // });
      // let ids = books.map(book => book.id)
      // await this.bookRepo.delete(ids);

      // Opcion 2: una sola sentencia sql
      await this.bookRepo.delete({
          author: {
              id: authorId
          }
      });


  }
}





