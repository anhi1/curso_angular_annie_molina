import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BASE_URL } from '../shared/constants';
import { Observable } from 'rxjs';
import { IUser } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url: string = `${BASE_URL}/users`;

  constructor(private httpClient: HttpClient) { }
  // crear usuario NO, porque ya se crean usuarios en el registro


  findCurrentUser(): Observable<IUser>{    //tambien puede ser GetProfile//q me devuelva el usuario actual que esta en el sitema q esta autentticado(q ha iniciado sesion)
    return this.httpClient.get<IUser>(`${this.url}/current`);
  }


  update(user: IUser): Observable<IUser> {
    return this.httpClient.put<IUser>(`${this.url}`, user);
  }

}
