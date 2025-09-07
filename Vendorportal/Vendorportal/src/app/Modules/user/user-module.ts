import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Profile } from './profile/profile';
import { Services } from './services/services';
import { Dashboard } from './dashboard/dashboard';
import { Logs } from './logs/logs';
import { Setting } from './setting/setting';
import { UserHeader } from '../../core/header/user-header/user-header';
import { UserFooter } from '../../core/footer/user-footer/user-footer';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    Profile,
    Services,
    Dashboard,
    Logs,
    Setting,
    RouterOutlet,
    UserHeader,
    UserFooter
  ]
})
export class UserModule { }
