import { CommonModule } from '@angular/common';
import {
  Component,
  computed,
  ContentChildren,
  QueryList,
  signal,
} from '@angular/core';
import { StepComponent } from '../step/step.component';
import { TopicComponent } from '../topic/topic.component';

@Component({
  selector: 'app-stepper',
  imports: [CommonModule, TopicComponent],
  templateUrl: './stepper.component.html',
  styleUrl: './stepper.component.css',
})
export class StepperComponent {
  topicName = '@ContentChildren()';
  @ContentChildren(StepComponent) steps!: QueryList<StepComponent>;
  // stepTitles: string[] = [];
  // currentStepIndex: number = 0;
  // ngAfterContentInit() {
  //   this.stepTitles = this.steps.map((step) => step.title);
  // }
  // goToStep(index: number) {
  //   if (index >= 0 && index < this.steps.length) {
  //     this.currentStepIndex = index;
  //   }
  // }
  // Using Signals
  private _currentStepIndex = signal(0);
  currentStepIndex = this._currentStepIndex; //To Expose for template Binding

  // computed signal fro step titles
  stepTitles = computed(() => this.steps?.map((step) => step.title) ?? []);

  // computed signal for current template ref
  currentStepTempate = computed(
    () => this.steps?.toArray()[this._currentStepIndex()]?.templateRef
  );
  goToStep(index: number) {
    if (index >= 0 && index < this.steps.length) {
      this._currentStepIndex.set(index);
    }
  }

  // ngAfterContentInit() {
  //   console.log('stepTitles: ', this.stepTitles());
  //   this.steps.changes.subscribe(() => {
  //     this.stepTitles();
  //   });
  // }
}
