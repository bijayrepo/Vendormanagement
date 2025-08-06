import { Component, HostListener, ViewChild } from '@angular/core';
import { MatToolbar } from "@angular/material/toolbar";
import { MatSidenav, MatSidenavContainer, MatSidenavModule } from "@angular/material/sidenav";
import { MatNavList } from "@angular/material/list";
import { MatIconModule } from "@angular/material/icon";

@Component({
  selector: 'app-header',
  imports: [MatToolbar, MatSidenavContainer, MatNavList, MatIconModule, MatSidenavModule],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  menuOpen = false;
   toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu(): void {
    this.menuOpen = false;
  }
 
}
