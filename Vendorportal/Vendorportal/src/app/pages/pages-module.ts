import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "../core/header/header";
import { Footer } from "../core/footer/footer/footer";
import { MainHeader } from "../core/header/main/main-header/main-header";


@Component({
  selector: 'app-pages-module',
  imports: [RouterOutlet, Header, Footer],
  templateUrl: './pages-module.html',
  styleUrl: './pages-module.css'
})
export class PagesModule {

}
