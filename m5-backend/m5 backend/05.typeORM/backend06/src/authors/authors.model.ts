import { Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Location } from 'src/locations/locations.model'


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

    @OneToOne(() => Location, {cascade: true, eager:true}) //ciudado con el eager
    @JoinColumn({name: 'id_location'}) //es obligatorio
    location: Location;

}