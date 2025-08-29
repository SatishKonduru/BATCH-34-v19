import { Component, Input, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-step',
  imports: [],
  templateUrl: './step.component.html',
  styleUrl: './step.component.css',
})
export class StepComponent {
  @Input() title: string = '';
  @ViewChild(TemplateRef, { static: true }) templateRef: TemplateRef<any>;
}
