import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IAuthor } from '../models/author';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  url: string ="http://localhost:3000/authors";

  constructor(private httpClient:HttpClient) { }  //para sacar datos de una url usamos el httpClient y lo importamos en el app.module.ts y en service

  findAll(): Observable<IAuthor[]> { // Observable<HttpResponse>
    return this.httpClient.get<IAuthor[]>(this.url); //get trae los datos
  }

  findById(id: number):Observable<IAuthor>{
    //https://jsonplaceholder.typicode.com/todos/4 o 1, 2, 3
    return this.httpClient.get<IAuthor>(`${this.url}/${id}`); //conn el get traemos la tarea 1 la traea 2...
  }

  //crear un nuevo objeto
  create(author :IAuthor):Observable<IAuthor>{
   return this.httpClient.post<IAuthor>(this.url, author); //mandar esto al servidor con el post
  }

  update(author:IAuthor):Observable<IAuthor>{
    return this.httpClient.put<IAuthor>(`${this.url}/${author.id}`, author);
  }

  deleteById(id:number):void{
    this.httpClient.delete(`${this.url}/${id}`);
  }
}
