import { Author } from "src/authors/authors.model";
import { Category } from "src/categories/categories.model";
import { Editorial } from "src/editorials/editorials.model";
import { Column, CreateDateColumn, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Book {
  @PrimaryGeneratedColumn()
  id: number; // indicarle una anotacion @PrimaryGeneratedColumn

  @Column()
  title: string;

  @Column({ unique: true, length: 13 })
  isbn: string;

  @Column({ type: 'decimal', precision: 10, scale: 2 }) // 10 indica digitos  // scale: indica 2 decimales
  price: number;

  @CreateDateColumn({ name: 'created_date' })
  createDate: Date;

  @Column({ type: 'int' })
  quantity: number;


  @Column({ type: 'boolean', default: false })
  published: boolean;


  // author ManyToOne
  @ManyToOne(() => Author) // pilla automatica si es llave primary
  @JoinColumn({ name: 'id_author' }) //join se una a una tabla es la coluna q unea las dos tablas
  author: Author;


  @ManyToOne(() => Editorial) // pilla automatica si es llave primary
  @JoinColumn({ name: 'id_editorial' }) //join se una a una tabla es la coluna q unea las dos tablas
  editorial: Editorial;


  @ManyToMany(() => Category, {cascade:true})
  @JoinTable({// esto es un objeto //optional // crea una tabla intermedia  // intentar intercambiar el nombre de las columnas
    name: 'book_category',
    joinColumn: {name:'id_book'}, // cambiando el nombre de la primera columna
    inverseJoinColumn: {name:'id_category'}
}) 
  categories: Category[];
}