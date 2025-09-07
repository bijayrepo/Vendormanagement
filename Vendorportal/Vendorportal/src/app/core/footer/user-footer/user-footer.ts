import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-user-footer',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './user-footer.html',
  styleUrl: './user-footer.css'
})
export class UserFooter {

}
