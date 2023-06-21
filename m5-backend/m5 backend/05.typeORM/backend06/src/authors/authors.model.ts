import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";


@Entity()
export class Author {

    @PrimaryGeneratedColumn()
    id: number; // indicarle una anotacion @PrimaryGeneratedColumn
    

    @Column({length: 50})
    name: string;

    @Column({length: 50})
    email: string;

    @Column({type: 'text'})
    bio: string;

    @CreateDateColumn({name:'created_date'})
    createdDate: Date;

    @UpdateDateColumn({name: 'update_date'})
    updateDate: Date;

}