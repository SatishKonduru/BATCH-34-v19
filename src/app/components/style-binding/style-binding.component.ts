import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-style-binding',
  imports: [CommonModule],
  templateUrl: './style-binding.component.html',
  styleUrl: './style-binding.component.css',
})
export class StyleBindingComponent {
  textColor = 'tomato';
  textSize = '30px';
  myValue = 10;

  myStyles = {
    color: this.textColor,
    fontSize: this.textSize,
  };
}
