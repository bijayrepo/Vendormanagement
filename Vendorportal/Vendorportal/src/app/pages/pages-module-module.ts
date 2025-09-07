import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Home } from './landingPages/home/home';
import { About } from './landingPages/about/about';
import { ContactUs } from './landingPages/contact-us/contact-us';
import { MainFooter } from '../core/footer/main/main';
import { MainHeader } from '../core/header/main/main-header/main-header';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    Home,
    About,
    ContactUs,
    MainHeader,
    MainFooter
  ]
})
export class PagesModuleModule { }
