import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { BASE_URL } from 'src/app/shared/constants';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.css']
})
export class AvatarComponent {

imagePreview: string | undefined; //para mostart
imageFile: File | undefined;  //para subir

  onFileSelected(event: Event){ //esto es un metodo
  

  let target = event.target as HTMLInputElement;
  console.log(target);
  
  if (target.files !==null && target.files.length > 0){ //carga la imagen
    this.imageFile = target.files[0];
    console.log(this.imageFile);

  
    //mostrar la imagen al usuario
    let reader = new FileReader();
    reader.onload = ev => this.imagePreview = reader.result as string;
    reader.readAsDataURL(this.imageFile); // leer la imagen

  }
}


constructor(private httpClient: HttpClient){}
save(){ //comprueba si hay una imagen

  if(!this.imageFile) return; // si no existe la imagen q haga un return
    
  //la imagen no es un arhivo texto, es binario por lo que necesita enviarla en un formData
  //para que se gestione correctamente
  let formData = new FormData();
  formData.append('file', this.imageFile);

  this.httpClient
                .post(`${BASE_URL}/users/avatar`, formData)
                .subscribe(data => console.log(data)); //enviamos a hhttpclein
}

}
