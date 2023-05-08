import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { IUser } from '../user.model';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent {


  userEmail:string= "";
  users: IUser[]=[]

  constructor(private userService: UserService){
    this.users = this.userService.findAll();
  }

  save() {
    let user: IUser = {
      email: this.userEmail.split('@')[0],
      fullName: this.userEmail
    }
    this.userService.save(user);
    this.userEmail="";
    this.users = this.userService.findAll();
  }
}
