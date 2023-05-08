import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    UserDetailComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    UserDetailComponent
  ]
})
export class UserModule { }
