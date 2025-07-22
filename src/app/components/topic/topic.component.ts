import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-topic',
  imports: [],
  templateUrl: './topic.component.html',
  styleUrl: './topic.component.css',
})
export class TopicComponent {
  @Input() topic: any;
}
