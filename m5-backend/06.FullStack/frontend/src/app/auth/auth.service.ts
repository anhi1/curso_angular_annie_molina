import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import jwt_decode from "jwt-decode";
import { BASE_URL, TOKEN } from '../shared/constants';



export interface Token{
  sub:number; //id del usuario
  email:string;
  role: string;
  exp: number; // timestamp con la fecha de expiracion
  iat: number; //Issued At: campo con la fecha de emision del token

}
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url: string = `${BASE_URL}/auth`;


  constructor(
    private httpClient: HttpClient,
    private router: Router
    ) { }

  login(login: any): Observable<any> {
    return this.httpClient.post(`${this.url}/login`, login);
  }

  register(user: any): Observable<any> {
    return this.httpClient.post(`${this.url}/register`, user);
  }

  logout() {
    localStorage.removeItem(TOKEN);
    this.router.navigate(['/auth/login']);
  }

  isLoggedIn() {
    return localStorage.getItem(TOKEN) !== null;
  }

  isAdmin(){
    let token = localStorage.getItem(TOKEN)?? ''; //si esto es verdadero q nos devuelva un texto vacio
    try {
      let decoded_token: Token = jwt_decode(token); //s de tipo token- devuelve esto como si fuera un objeto y q contiene un atribu role de tipo strjing
       // detecta el role console.log(decoded_token);

       //lo ponemos en un atribuot
      let isAdmin= decoded_token.role === 'admin'; // true si es admi //  si no es administrador es false // deviuelve el resultado de una comparacion
      console.log(isAdmin);
      return isAdmin
      
    }catch (error){
      console.log(error); // error si es incorrecto
    }
    return false;
  }

}
