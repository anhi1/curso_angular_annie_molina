import { Injectable } from '@angular/core';
import { IBook } from '../models/book.model';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  url: string ="http://localhost:3000/books";

  constructor(private httpClient:HttpClient) { }  //para sacar datos de una url usamos el httpClient y lo importamos en el app.module.ts y en service

  findAll(): Observable<IBook[]> { // Observable<HttpResponse>
    return this.httpClient.get<IBook[]>(this.url); //get trae los datos
  }

  findAllByAuthorId(authorId:number): Observable<IBook[]>{
    return this.httpClient.get<IBook[]>(`${this.url}?authorId=${authorId}`);
  }
  

  findById(id: number):Observable<IBook>{
    //https://jsonplaceholder.typicode.com/todos/4 o 1, 2, 3
    return this.httpClient.get<IBook>(`${this.url}/${id}`); //conn el get traemos la tarea 1 la traea 2...
  }

  //crear un nuevo objeto
  create(book :IBook):Observable<IBook>{
   return this.httpClient.post<IBook>(this.url, book); //mandar esto al servidor con el post
  }

  update(book:IBook):Observable<IBook>{
    return this.httpClient.put<IBook>(`${this.url}/${book.id}`, book);
  }


  //opcion 1
  //deleteById(id:number): Observable<{}>{ // esto significa no te devulve nada objeto vacio <{}>
  // return this.httpClient.delete(`${this.url}/${id}`);
  //}
  httpOptions ={
    observe: 'response' as 'body'
  }
  
  //opcion 2:
  deleteById(id:number): Observable<HttpResponse<{}>> {
    return this.httpClient.delete<HttpResponse<{}>>(`${this.url}/${id}`, this.httpOptions);
   }
}
