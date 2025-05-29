import { Component } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  imports: [],
  templateUrl: './interpolation.component.html',
  styleUrl: './interpolation.component.css',
})
export class InterpolationComponent {
  name = 'SATISH KONDURU';
  age = 45;
  getName() {
    return this.name;
  }
}
