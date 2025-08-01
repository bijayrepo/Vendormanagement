import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationRoutingModule } from './registration-routing-module';
import { RegistrationForm } from './registration-form/registration-form';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RegistrationRoutingModule,
    RegistrationForm
  ]
})
export class RegistrationModule { }
