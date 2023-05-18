import { Component } from '@angular/core';
import { IUser } from '../user.model';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent {
  user: IUser = {

      fullName: "patty",
      email: "paty@gmail.com",
      bio: "bio",
      avatar: ;
};



}
