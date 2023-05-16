import { Component } from '@angular/core';
import { IUser } from '../user.model';
import { UserService } from '../user.service';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  users: IUser[]=[];
  error: string = "";
  constructor(private userService: UserService){}

  ngOnInit(): void {
    /*

    this.userService.findAll().subscribe(data => {
    console.log(data);
        console.log(data.status);
      console.log(data.body);
        this.users = data.body ?? []; //asignar los datos de usuarios proporcionados por la API a la propiedad users
      });

      //ver subcribe con varios argumentos(opcional), next error complete
    this.userService.findAll().subscribe(
      data => this.users = data.body ?? [],
      data =>console.log("se ha producido un error")
  );
    */
    //opcion 4
    this.userService.findAll().subscribe({
      next: (data: HttpResponse<IUser[]>) => {
        console.log(data.status);
        this.users = data.body ?? [];
      },
      error: (err: Error) => {
        console.log('Error' + err);
        this.showError(err);
      },
      complete: () => console.log('findAll completado'),
    });
  }

  showError(err: Error) {
    this.error = err.message;
    setTimeout(() => this.error = "", 5000); //5 segundos
  }
}
