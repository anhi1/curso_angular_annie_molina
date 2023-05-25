import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {
  userForm = new FormGroup({
    email: new FormControl(''),
    fullName: new FormControl(''),
    age: new FormControl(18),
    salary: new FormControl(''),
    isStudent: new FormControl(false),
    birthday: new FormControl(''),
    entryHour: new FormControl(''),
    bookingDate: new FormControl(null),
    jobCategory:new FormControl(null),
    company:new FormControl(''), //nota: no poner null ni dejarlo sin string
    hobbies: new FormControl([]),
    bio:new FormControl(''),
    avatar:new FormControl(null)

  });

  save(): void {
    console.log(this.userForm.get('email')?.value);// ? que no sea nulo al objeto
    console.log(this.userForm.get('fullName')?.value);
    console.log(this.userForm.get('age')?.value);
    console.log(this.userForm.get('isStudent')?.value);
    console.log(this.userForm.get('isStudent')?.value);
    console.log(this.userForm.get('birthday')?.value);
    console.log(this.userForm.get('entryHour')?.value);
    console.log(this.userForm.get('bookingDate')?.value);
    console.log(this.userForm.get('jobCategory')?.value);
    console.log(this.userForm.get('company')?.value);
    console.log(this.userForm.get('hobbies')?.value);
    console.log(this.userForm.get('bio')?.value);
    console.log(this.userForm.get('avatar')?.value);

    this.userForm.reset();
  }

  imageSrc: string | undefined;

  uploadFile(event: Event): void{
  let target =  event.target as HTMLInputElement; //esta funcion coge el evento
  if(target.files !== null && target.files.length > 0)
    let fileImg = target.files[0];

    //Mostrar la imagen del usuario
    let reader = new FileReader();
    reader.onload = ev => this.imageSrc = reader.result as string;// que hacer cuando se lea la imagen
    reader.readAsDataURL(fileImg); //leer la imagen
  }

}
