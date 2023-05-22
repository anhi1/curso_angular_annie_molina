import { Component } from '@angular/core';
import { IUser } from '../user.model';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css']
})
export class UserTableComponent {
  displayedColumns: string[]=['FullName', 'email', 'avatar'];
  users: IUser[] = [
    {
      fullName:"Annie Molina",
      email:"usuario@gmail.com",
      bio:"lorem ipsum",
      avatar:"https://ui-avatars.com/api/?name=Annie+Molina"
    },
    {
      fullName:"usuario2",
      email:"usuario2@gmail.com",
      bio:"lorem ipsum dolor",
      avatar:"/assets/img/user-avatar3.png"
    },
    {
      fullName:"usuario3",
      email:"usuario3@gmail.com",
      bio:"lorem ipsum",
      avatar:"/assets/img/user-avatar1.png"
    },
];


}


