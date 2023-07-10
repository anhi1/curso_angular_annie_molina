import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url: string = "http://localhost:3000/auth";


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
    localStorage.removeItem('jwt_token');
    this.router.navigate(['/auth/login']);
  }

  isLoggedIn() {
    return localStorage.getItem('jwt_token') !== null;
  }

  // ... más comprobaciones ...
  // comprobar un rol
  // comprobar si ha iniciado sesión
  // logout

}
