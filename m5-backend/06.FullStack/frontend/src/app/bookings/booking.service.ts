import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BASE_URL } from '../shared/constants';
import { IBooking } from './booking.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  url: string = `${BASE_URL}/bookings`;

  constructor(private httpClient: HttpClient) { }

  findAll(): Observable<IBooking[]> {
    return this.httpClient.get<IBooking[]>(this.url);
  }

  create(booking :IBooking): Observable<IBooking> {
    return this.httpClient.post<IBooking>(this.url, booking);
  }

  update(booking: IBooking): Observable<IBooking> {
    return this.httpClient.put<IBooking>(`${this.url}`, booking);
  }

}