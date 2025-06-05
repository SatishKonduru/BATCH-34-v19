import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectChange, MatSelectModule } from '@angular/material/select';
import {
  MatCheckboxChange,
  MatCheckboxModule,
} from '@angular/material/checkbox';
import { MatRadioChange, MatRadioModule } from '@angular/material/radio';

@Component({
  selector: 'app-event-binding',
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatCheckboxModule,
    MatRadioModule,
  ],
  templateUrl: './event-binding.component.html',
  styleUrl: './event-binding.component.css',
})
export class EventBindingComponent {
  name: string = '';
  result = '';
  inputValue = '';
  selectedValue = '';
  isChecked = false;
  selectedGender = '';
  keyUpValue = '';
  keyDownValue = '';
  keyEnterValue = '';
  foucsStatus = '';
  contextValue = '';
  dragStatus = '';
  scrollStatus = '';
  getName() {
    this.name = 'SATISH';
  }
  clearName() {
    this.name = '';
  }

  onDoubleClick() {
    this.result = 'You double clicked this Button';
  }

  onInput(e: Event) {
    // const value = (e.target as HTMLInputElement).value;
    // this.inputValue = value;
    // or
    this.inputValue = (e.target as HTMLInputElement).value;
  }
  onInputWithValue(value: any) {
    this.inputValue = value;
  }

  onChange(e: MatSelectChange) {
    this.selectedValue = e.value;
  }

  onCheckBoxChange(e: MatCheckboxChange) {
    this.isChecked = e.checked;
  }

  onGenderChange(e: MatRadioChange) {
    // console.log(e.value);
    this.selectedGender = e.value;
  }

  onKeyUp(e: KeyboardEvent) {
    // console.log(e);
    this.keyUpValue = e.key;
  }

  onKeyDown(e: KeyboardEvent) {
    this.keyDownValue = e.key;
  }

  onEnterKey = (e: KeyboardEvent) => {
    this.keyEnterValue = 'Enter Key Pressed';
  };

  onFocus = () => {
    this.foucsStatus = 'Input Got Focus';
  };

  onBlur = () => {
    this.foucsStatus = 'Input LOST focus';
  };

  onMouseOver = () => console.log('Mouse Over');
  onMouseEnter = () => console.log('Mouse Enter');
  onMouseLeave = () => console.log('Mouse Leave');

  onRightClick(e: MouseEvent) {
    console.log(e);
    e.preventDefault();
    this.contextValue = 'Right Clicked';
  }

  onDragStart = (e: DragEvent) => {
    this.dragStatus = 'Dragging Started';
    e.dataTransfer?.setData('text/plain', 'dragItem');
  };
  onDragOver = (e: DragEvent) => {
    e.preventDefault(); //To Allow Dropping
    this.dragStatus = 'Over the Drop Zone';
  };
  onDrop = (e: DragEvent) => {
    e.preventDefault();
    const draggedElementId = e.dataTransfer?.getData('text/plain');
    const draggedElement = document.getElementById(draggedElementId!); // ! => Non-Null Assertion operator in TS
    const dropZone = document.getElementById('dropZone');
    if (draggedElementId && dropZone) {
      dropZone.appendChild(draggedElement);
      this.dragStatus = 'Dropped and Moved Successfully';
    } else {
      this.dragStatus = 'Dropped Fail';
    }
  };

  onScroll = (e: Event) => {
    this.scrollStatus = 'You Scrolled';
  };
}

// One Way Data binding

// 1. Interpolation / String Interpolation -> {{}}
// 2. Property Binding -> []
// 3. Style Binding ->
// 4. Class Binding ->
// 5. Event Binding - > ()

// Template Ref. Variables

// Two way Data Binding
