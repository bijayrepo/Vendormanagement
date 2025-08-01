import { Routes } from '@angular/router';
import { CoreModule } from './core/core-module';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

NgModule({
  imports: [
   
    CoreModule,
    ReactiveFormsModule
  ],
  bootstrap: []
})
export const routes: Routes = [
    {
        path:'registartion',
        loadChildren:()=>
            import('./registration/registration-routing-module').then(m=>m.RegistrationRoutingModule)
    },
    { path: '', redirectTo: '/registration', pathMatch: 'full' }
];