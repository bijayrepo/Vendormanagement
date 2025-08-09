import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Registration } from '../../pages/Vendor/registration/registration';

const routes: Routes = [
  {
    path:'vendor/registartion',
    redirectTo:'vendor/registartion',
    pathMatch: 'full'
  },
  {
     path:'vendor/registartion',
    component:Registration
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VendorRoutingModule { }
