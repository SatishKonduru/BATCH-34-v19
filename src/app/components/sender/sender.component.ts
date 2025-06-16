import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { ReceiverComponent } from '../receiver/receiver.component';

@Component({
  selector: 'app-sender',
  imports: [CommonModule, ReceiverComponent],
  templateUrl: './sender.component.html',
  styleUrl: './sender.component.css',
})
export class SenderComponent {
  message = 'This Message is from Parent Component';
  cMsg = '';
  incomingMsg = signal<string>('');
  updateIncomingMessage(msg: string) {
    this.incomingMsg.set(msg);
  }
}
