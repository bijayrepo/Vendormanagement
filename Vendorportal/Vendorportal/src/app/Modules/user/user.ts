import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserHeader } from "../../core/header/user-header/user-header";
import { UserFooter } from "../../core/footer/user-footer/user-footer";

@Component({
  selector: 'app-user',
  imports: [RouterOutlet, UserHeader, UserFooter],
  templateUrl: './user.html',
  styleUrl: './user.css'
})
export class User {

}
