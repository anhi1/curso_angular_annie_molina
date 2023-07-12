import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { UserListComponent } from './user-list/user-list.component';


@NgModule({
  declarations: [
    ProfileComponent,
    UserListComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule
  ]
})
export class UsersModule { }
