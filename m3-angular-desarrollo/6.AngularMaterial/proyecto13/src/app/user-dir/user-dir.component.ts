import { Component } from '@angular/core';
import { IUser } from '../user.model';

@Component({
  selector: 'app-user-dir',
  templateUrl: './user-dir.component.html',
  styleUrls: ['./user-dir.component.css']
})
export class UserDirComponent {
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
