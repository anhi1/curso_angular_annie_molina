import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {
  userForm = new FormGroup({
    email: new FormControl(),
    fullName: new FormControl(),
    age: new FormControl(),
    salary: new FormControl(),

  });

  save(): void {
    console.log(this.userForm.get('email')?.value);// ? que no sea nulo al objeto
    console.log(this.userForm.get('fullName')?.value);
    console.log(this.userForm.get('age')?.value);
    console.log(this.userForm.get('salary')?.value);
    this.userForm.reset();

  }

}
