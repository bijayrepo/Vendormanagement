import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Changepassword } from './changepassword/changepassword';
import { Login } from './login/login';
import { Signup } from './signup/signup';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    Changepassword,
    Login,
    Signup,
    RouterModule,
    ReactiveFormsModule
  ]
})
export class AuthModule { }
