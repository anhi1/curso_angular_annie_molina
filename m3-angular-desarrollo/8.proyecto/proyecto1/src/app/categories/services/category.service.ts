import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICategory } from '../models/category.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  url: string ="http://localhost:3000/categories";

  constructor(private httpClient:HttpClient) { }  //para sacar datos de una url usamos el httpClient y lo importamos en el app.module.ts y en service

  findAll(): Observable<ICategory[]> { // Observable<HttpResponse>
    return this.httpClient.get<ICategory[]>(this.url); //get trae los datos
  }

  findById(id: number):Observable<ICategory>{
    //https://jsonplaceholder.typicode.com/todos/4 o 1, 2, 3
    return this.httpClient.get<ICategory>(`${this.url}/${id}`); //conn el get traemos la tarea 1 la traea 2...
  }

  
  create(category : ICategory):Observable<ICategory>{
   return this.httpClient.post<ICategory>(this.url, category); //mandar esto al servidor con el post
  }

  update(category: ICategory):Observable<ICategory>{
    return this.httpClient.put<ICategory>(`${this.url}/${category.id}`, category);
  }

  deleteById(id:number):void{
    this.httpClient.delete(`${this.url}/${id}`);
  }
}
