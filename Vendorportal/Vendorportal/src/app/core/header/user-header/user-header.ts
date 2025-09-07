import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-user-header',
  standalone:true,
  imports: [RouterModule, CommonModule],
  templateUrl: './user-header.html',
  styleUrl: './user-header.css'
})
export class UserHeader {
  constructor(private router: Router) {
  }
login(){
  this.router.navigate(['/auth/login']);
}
}
