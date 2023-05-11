import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IEvent } from './event.model';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  url:string ="https://jsonplaceholder.typicode.com/todos"; //esto es una url

  constructor(private httpClient:HttpClient) { }  //para sacar datos de una url usamos el httpClient y lo importamos en el app.module.ts y en service

  findAll(): Observable<IEvent[]> { // Observable<HttpResponse>
    return this.httpClient.get<IEvent[]>(this.url); //get trae los datos
  }

  findById(id: number):Observable<IEvent>{ //any lee cualquier objeto
    //https://jsonplaceholder.typicode.com/todos/4 o 1, 2, 3
    return this.httpClient.get<IEvent>(`${this.url}/${id}`); //conn el get traemos la tarea 1 la traea 2...
  }

  //findAllByCompletedTrue()
  //con 1 parametro: ?completed=true
  //con 2 parametros: ?param1=value1&param2=value2
  findAllByCompletedTrue():Observable<IEvent[]>{
    return this.httpClient.get<IEvent[]>(`${this.url}?completed=true`)
  }

  findAllByCompletedFalse():Observable<IEvent[]>{
    return this.httpClient.get<IEvent[]>(`${this.url}?completed=false`)
  }

  //crear un nuevo objeto
  create(event :IEvent):Observable<IEvent>{
   return this.httpClient.post<IEvent>(this.url, event); //mandar esto al servidor con el post
  }

  update(event:IEvent):Observable<IEvent>{
    return this.httpClient.put<IEvent>(`${this.url}/${event.id}`, event);
  }

  deleteById(id:number):void{
    this.httpClient.delete(`${this.url}/${id}`);
  }



  //findAllByCompletedFalse()
  //save
  //update
  //deleteById


}

