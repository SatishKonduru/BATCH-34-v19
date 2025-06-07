import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-if',
  imports: [CommonModule],
  templateUrl: './if.component.html',
  styleUrl: './if.component.css',
})
export class IfComponent {
  isLoggedIn = true;
  user = {
    name: 'SATISH KONDURU',
    isAdmin: false,
  };
}
