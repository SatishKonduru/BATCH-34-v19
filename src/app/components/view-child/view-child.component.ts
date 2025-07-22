import { CommonModule } from '@angular/common';
import { Component, ElementRef, signal, ViewChild } from '@angular/core';
import { TopicComponent } from '../topic/topic.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'app-view-child',
  imports: [
    CommonModule,
    TopicComponent,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  templateUrl: './view-child.component.html',
  styleUrl: './view-child.component.css',
})
export class ViewChildComponent {
  topicName: string = '@ViewChild';
  // inputValueWithRef = '';
  // inputValueWithViewChild = '';
  // @ViewChild('inputValue', { static: true }) inputStaticTrue: ElementRef;
  // @ViewChild('inputValue', { static: false }) inputStaticFalse: ElementRef;
  // // if TURE-> it is available when the component is initaialized (ngOnInit())
  // // if FALSE -> it is available (resolved)in every change detection
  // getValueWitRef(element: HTMLInputElement) {
  //   this.inputValueWithRef = element.value;
  // }
  // getValueWithViewChild() {
  //   // this.inputValueWithViewChild = this.el.nativeElement.value;
  //   // this.inputValueWithViewChild = this.inputStaticTrue?.nativeElement?.value;
  //   this.inputValueWithViewChild = this.inputStaticFalse?.nativeElement?.value;
  // }
  // ngOnInit() {
  //   console.log('ngOnInit Called....');
  //   console.log(
  //     'inputStaticTrue in OnInit: ',
  //     this.inputStaticTrue.nativeElement.value
  //   );
  //   console.log(
  //     'inputStaticTrue in OnInit: ',
  //     this.inputStaticFalse.nativeElement.value
  //   );
  // }
  // ngAfterViewInit() {
  //   console.log('AfterViewInit Called....');
  //   console.log(
  //     'inputStaticTrue in AfterViewInit: ',
  //     this.inputStaticTrue.nativeElement.value
  //   );
  //   console.log(
  //     'inputStaticFalse in AfterViewInit: ',
  //     this.inputStaticFalse.nativeElement.value
  //   );
  // }

  inputValueWithRef = signal<string>('');
  inputValueWithViewChild = signal<string>('');

  @ViewChild('inputValue') el: ElementRef;
  getValueWitRef(el: HTMLInputElement) {
    this.inputValueWithRef.set(el.value);
  }

  getValueWithViewChild() {
    const value = this.el?.nativeElement?.value;
    this.inputValueWithViewChild.set(value);
  }
}
