import { Component } from '@angular/core';
import { IUser } from '../user.model';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css']
})
export class UserTableComponent {
  displayedColumns: string[]=['avatar','fullName','email','actions' ];
  users: IUser[] = [
    {
      fullName:"Annie Molina",
      email:"usuario@gmail.com",
      bio:"lorem ipsum",
      avatar:"https://ui-avatars.com/api/?name=Annie+Molina"
    },
    {
      fullName:"Betty",
      email:"usuario2@gmail.com",
      bio:"lorem ipsum dolor",
      avatar:"/assets/img/user-avatar3.png"
    },
    {
      fullName:"Carolina",
      email:"usuario3@gmail.com",
      bio:"lorem ipsum",
      avatar:"/assets/img/user-avatar1.png"
    },
];

//constructor(private router:Router);
view(user: IUser):void{
    console.log(user);

}
edit(user:IUser):void{
  console.log(user);

}
deleteUser(user: IUser): void{
  console.log(user);

}
create():void{}

deleteAll():void{}

}


