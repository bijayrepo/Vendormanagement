import { Component, signal } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { Header } from './core/header/header';
import { Footer } from './core/footer/footer/footer';
import { filter } from 'rxjs';
import { MainFooter } from './core/footer/main/main';
import { MainHeader } from './core/header/main/main-header/main-header';
import { NgIf } from '@angular/common';
import { AuthModule } from './Modules/auth/auth-module';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AuthModule],
  standalone: true,
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  showMainHeaderFooter = true;
  showChildHeaderFooter = false;
  constructor(private router: Router) {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        // Show child header/footer only if URL starts with /vendor
        if (event.urlAfterRedirects.startsWith('/vendor')) {
          this.showMainHeaderFooter = false;
          this.showChildHeaderFooter = true;
        } else {
          // Otherwise show main header/footer
          this.showMainHeaderFooter = true;
          this.showChildHeaderFooter = false;
        }
        console.log(
          'showMainHeaderFooter:',
          this.showMainHeaderFooter,
          'showChildHeaderFooter:',
          this.showChildHeaderFooter
        );
      });
  }
}
