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
      bio: "Lorem ipsum dolor asit amet ipsum The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agipes very whunting.",
      avatar: "https://material.angular.io/assets/img/examples/shiba1.jpg"
};



}
