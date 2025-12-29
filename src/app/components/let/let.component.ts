import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-let',
  imports: [],
  templateUrl: './let.component.html',
  styleUrl: './let.component.css',
})
export class LetComponent {
  // firstName = 'Satish';
  // lastName = 'Konduru';
  firstName = signal('Satish');
  lastName = signal('Konduru');
}
