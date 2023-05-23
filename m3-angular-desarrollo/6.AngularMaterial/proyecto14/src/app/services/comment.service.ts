import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IComment } from '../models/comment.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  url:string="https://jsonplaceholder.typicode.com/comments";

  constructor(private httpClient: HttpClient) { }

  findAll(): Observable<IComment[]>{
    return this.httpClient.get<IComment[]>(this.url);
  }

  findById(id: number):Observable<IComment>{
    return this.httpClient.get<IComment>(`${this.url}/${id}`);
  }
}
