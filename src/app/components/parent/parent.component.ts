import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ComponentRef,
  EnvironmentInjector,
  inject,
  Injector,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { TopicComponent } from '../topic/topic.component';
import { ChildComponent } from '../child/child.component';
import { MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'app-parent',
  imports: [TopicComponent, ChildComponent, MatButtonModule],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css',
})
export class ParentComponent implements AfterViewInit {
  topicName = '@ViewChild with Signals';

  @ViewChild('childHost', { read: ViewContainerRef }) vcr!: ViewContainerRef;

  childRef!: ComponentRef<ChildComponent>;
  private injector = inject(Injector);
  private envInjector = inject(EnvironmentInjector);
  msgToChild = 'This message is sent from Parent';
  childMessage: any;

  constructor(private cdr: ChangeDetectorRef) {}

  ngAfterViewInit(): void {
    this.childRef = this.vcr.createComponent(ChildComponent, {
      environmentInjector: this.envInjector,
      injector: this.injector,
    });
    this.childRef.setInput('message', this.msgToChild);
    this.childMessage = this.childRef?.instance?.childMessage;
    this.cdr.detectChanges();
  }

  callChildMethod() {
    this.childRef?.instance?.showMessage();
  }
}
