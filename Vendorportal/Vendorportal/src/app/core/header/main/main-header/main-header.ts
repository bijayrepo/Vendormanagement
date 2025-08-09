import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-main-header',
  imports: [],
  templateUrl: './main-header.html',
  styleUrl: './main-header.css'
})
export class MainHeader {
menuOpen = false;
constructor(private router: Router) {}
   toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu(): void {
    this.menuOpen = false;
  }
    goHome() {
  this.router.navigate(['/']);
}
}
