import { Component, HostListener, ViewChild } from '@angular/core';
import { MatToolbar } from "@angular/material/toolbar";
import { MatSidenav, MatSidenavContainer, MatSidenavModule } from "@angular/material/sidenav";
import { MatNavList } from "@angular/material/list";
import { MatIconModule } from "@angular/material/icon";
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [MatIconModule, MatSidenavModule],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  menuOpen = false;
  constructor(private router: Router) {}
   toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu(): void {
    this.menuOpen = false;
  }
   goToVendorPage() {
    this.router.navigate(['/vendor/registartion']);
  }
 
}
