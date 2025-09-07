import { Routes } from '@angular/router';
import { CoreModule } from './core/core-module';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Registration } from './pages/Vendor/registration/registration';
import { Home } from './pages/landingPages/home/home';
import { Auth } from './Modules/auth/auth';
import { Login } from './Modules/auth/login/login';
import { Signup } from './Modules/auth/signup/signup';
import { Changepassword } from './Modules/auth/changepassword/changepassword';
import { User } from './Modules/user/user';
import { Dashboard } from './Modules/user/dashboard/dashboard';
import { Profile } from './pages/User/profile/profile';

NgModule({
  imports: [CoreModule, ReactiveFormsModule],
  bootstrap: [],
});
export const routes: Routes = [
  // {
  //     path:'registartion',
  //     loadChildren:()=>
  //         import('./registration/registration-routing-module').then(m=>m.RegistrationRoutingModule)
  // },
  // { path: '', redirectTo: '/registration', pathMatch: 'full' },
  {
    path: '', // empty path means root URL `/`
    component: Home,
    pathMatch: 'full', // ensures exact match for `/`
  },
  {
    path: 'vendor/registartion',
    component: Registration,
  },
  {
    path: 'auth',
    component: Auth,
    children: [
      {
        path: 'login',
        component: Login,
      },
      {
        path: 'signup',
        component: Signup,
      },
      {
        path: 'changepassword',
        component: Changepassword,
      },
    ],
  },
  {
    path:'user',
    component:User,
    children:[
      {
        path:'dashboard',
        component:Dashboard
      },
      {
        path:'profile',
        component:Profile
      }
    ]
  }
];
