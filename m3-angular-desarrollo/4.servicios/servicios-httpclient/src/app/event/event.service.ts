import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  url:string ="https://jsonplaceholder.typicode.com/todos"; //esto es una url

  constructor(private httpClient:HttpClient) { }  //para sacar datos de una url usamos el httpClient y lo importamos en el app.module.ts y en service

  findAll(): Observable<any> { // Observable<HttpResponse>
    return this.httpClient.get(this.url); //get trae los datos
  }

  findById(id: number):Observable<any>{ //any lee cualquier objeto
    //https://jsonplaceholder.typicode.com/todos/4 o 1, 2, 3
    return this.httpClient.get(`${this.url}/${id}`); //conn el get traemos la tarea 1 la traea 2...
  } //(`${this.url}/${id}`)  --> no puede tener espacios
}
