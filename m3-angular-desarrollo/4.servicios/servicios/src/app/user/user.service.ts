import { Injectable } from '@angular/core';
import { IUser } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: IUser[] =[]

  constructor() { }

  save(user:IUser):void{
    this.users.push(user);
  }

  findByEmail(email:string):IUser | undefined{
    return this.users.find(user => user.email === email);
  }

  /*
  en el componente1 en el componenteUserDetail agregar en el constructor el service UserService encapsulado
  2.creamos un input con ngModle en user-detail.componente.html
  cuando se da a un boton  se lee el input y se crea un nuevo objeto usuario y se guarda en service.save

  3. en otro input con ngModle permitir filtar por email si el usuario existe lo mostramos si no exitse mostramos un texto en rojo de que no existe
 */

}
