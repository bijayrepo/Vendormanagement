import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VendorRoutingModule } from './vendor-routing-module';
import { MainHeader } from '../../core/header/main/main-header/main-header';
import { MainFooter } from '../../core/footer/main/main';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    VendorRoutingModule,
    MainHeader,
    MainFooter
  ]
})
export class VendorModule { }
