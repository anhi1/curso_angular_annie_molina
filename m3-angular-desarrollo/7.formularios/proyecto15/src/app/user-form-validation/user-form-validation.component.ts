import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';

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
    salary: new FormControl(null, [Validators.required, Validators.min(16500), Validators.max(100000)]),
    nif: new FormControl('', [Validators.required, Validators.pattern('^[0-9]{8}[A-Z]$')]),
    phone: new FormControl('', [Validators.pattern('^[679]{1}[0-9]{8}$')]),
    password: new FormControl('', [Validators.required, Validators.pattern('^[A-Za-z0-9$%&/()]{8,20}$')]),
    passwordConfirm: new FormControl('', [Validators.required, Validators.pattern('^[A-Za-z0-9$%&/()]{8,20}$')])
  }, {validators: this.passwordConfirmValidator});

  passwordConfirmValidator(control: AbstractControl){
    if (control.get('password')?.value === control.get('passwordConfirm')?.value)
      return null;
      else
      return {'confirmError':true};
  }
  nothWhiteSpacesValidator(control: AbstractControl){
  let containSpaces = (control.value || '').includes('');
  if(containSpaces)
    return{'whitespacesError': true}; //si ocntiene espacios si hay un error
    else
    return null; //si no contiene espacios esta bien
}


  save(): void{
    if(this.userForm.valid){
      console.log("formulario correcto");
    }else{
      console.log("Formulario incorrecto, tiene errores de validadcion");
    }
    console.log(this.userForm.get('nickName'));
  }



}



