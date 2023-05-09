import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { IUser } from '../user.model';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent {

  //datos
  users: IUser[]=[]; //guardar -estructura de datos
  user: IUser | undefined; //busacando un usuario por email

  //inputs [(ngModel)] - variables
  userEmail:string= "";
  searchEmail:string="";
  searched:boolean = false;



  constructor(private userService: UserService){}
  //METODOS
  //probar la interracion con un servicio
  findByEmail(): void{
    this.user = this.userService.findByEmail(this.searchEmail)//llamar al service
    this.searchEmail = ""; //resetea el email para no estar borrando
    this.searched = true;
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
