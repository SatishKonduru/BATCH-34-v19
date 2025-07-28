import { Component, input } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css',
})
export class ChildComponent {
  message = input<string>('');
  childMessage = 'This is Child Message';
  showMessage() {
    alert('Child Says: ' + this.message());
  }
}
