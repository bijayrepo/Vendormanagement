import { Routes } from '@angular/router';
import { CoreModule } from './core/core-module';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Registration } from './pages/Vendor/registration/registration';
import { VendorRoutingModule } from './Modules/vendor/vendor-routing-module';
import { Home } from './pages/landingPages/home/home';


NgModule({
  imports: [
    CoreModule,
    ReactiveFormsModule,
    VendorRoutingModule
  ],
  bootstrap: []
})
export const routes: Routes = [
    // {
    //     path:'registartion',
    //     loadChildren:()=>
    //         import('./registration/registration-routing-module').then(m=>m.RegistrationRoutingModule)
    // },
    // { path: '', redirectTo: '/registration', pathMatch: 'full' },
    {
    path: '',            // empty path means root URL `/`
    component: Home,
    pathMatch: 'full'    // ensures exact match for `/`
  },
    {
      path:'vendor/registartion',
      component:Registration
    }
];