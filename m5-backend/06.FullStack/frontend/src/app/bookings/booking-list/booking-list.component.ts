import { Component, OnInit } from '@angular/core';
import { IBooking } from '../booking.model';
import { BookingService } from '../booking.service';

@Component({
  selector: 'app-booking-list',
  templateUrl: './booking-list.component.html',
  styleUrls: ['./booking-list.component.css']
})
export class BookingListComponent implements OnInit{
  
  displayedColumns: string[] = [
    'price',
    'startDate',
    'finishDate',
    'actions',
  ];

  bookings: IBooking[] = [];
  constructor(private bookingService: BookingService){}

  ngOnInit(): void {
    this.bookingService.findAll().subscribe(data => this.bookings = data);
  }
}
