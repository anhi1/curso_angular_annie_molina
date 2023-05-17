import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  //httpClient
  constructor() { }

  //observable sin HttpResponse: Observable<IPhoto[]>
  findAll(){}

  //Observable<IPhoto>
  findById(){}
}
