import { Component } from '@angular/core';
import { MainFooter } from "../../../core/footer/main/main";
import { RegistrationRoutingModule } from "../../../registration/registration-routing-module";
import { Header } from "../../../core/header/header";
import { MainHeader } from '../../../core/header/main/main-header/main-header';

@Component({
  selector: 'app-vendor',
  imports: [MainHeader, RegistrationRoutingModule, MainFooter],
  templateUrl: './vendor.html',
  styleUrl: './vendor.css'
})
export class Vendor {

}
