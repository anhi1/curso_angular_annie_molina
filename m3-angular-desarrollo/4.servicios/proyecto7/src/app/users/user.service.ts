import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url:string = "https://jsonplaceholder.typicode.com/users";

  httpOptions ={
    observe:'response' as 'body' //'body': Esto es el valor por defecto y significa que recibirás el cuerpo de la respuesta
  }

  constructor(private httpClient: HttpClient) { }

  findAll():Observable<HttpResponse<IUser[]>>{
    return this.httpClient.get<HttpResponse<IUser[]>>(this.url, this.httpOptions);
  }

}


/*
  

  'response': Esto te dará acceso completo al objeto HttpResponse, 
      que incluye tanto el cuerpo de la respuesta como metadatos adicionales, 
      como el estado de la respuesta y los headers

    observe: tiene por defecto valor 'body' para traer solo los datos
  */