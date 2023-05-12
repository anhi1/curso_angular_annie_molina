import { Component } from '@angular/core';
import { IUser } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  users: IUser[]=[];

  constructor(private userService: UserService){}

  ngOnInit(): void {
    this.userService.findAll().subscribe(data => {
      console.log(data);
      console.log(data.status);
      console.log(data.body);
      this.users = data.body ?? [];
    });
  }
}
