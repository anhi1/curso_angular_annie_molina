import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-form-validation',
  templateUrl: './user-form-validation.component.html',
  styleUrls: ['./user-form-validation.component.css']
})
export class UserFormValidationComponent {
  userForm = new FormGroup({
    fullName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    nickName: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(15)]),

    //validator personalizado

  });

  save(): void{
    if(this.userForm.valid){
      console.log("formulario correcto");
    }else{
      console.log("Formulario incorrecto, tiene errores de validadcion");
    }
    console.log(this.userForm.get('fullName'));
  }



}



