import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  input,
  Input,
  Output,
  signal,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'app-receiver',
  imports: [CommonModule, MatButtonModule],
  templateUrl: './receiver.component.html',
  styleUrl: './receiver.component.css',
})
export class ReceiverComponent {
  // @Input() xyz: any;
  xyz = input<string>();

  @Output() childReply = new EventEmitter();
  msg = signal<string>('');
  private replySignal = signal('This is the Reply Mesg');
  onReply() {
    this.childReply.emit(this.replySignal());
  }
  showParentMsg() {
    this.msg.set(this.xyz());
  }
}
