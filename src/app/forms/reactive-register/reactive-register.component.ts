import { CommonModule } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { TestComponent } from '../../components/test/test.component';
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'app-reactive-register',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
  ],
  templateUrl: './reactive-register.component.html',
  styleUrl: './reactive-register.component.css',
})
export class ReactiveRegisterComponent {
  private fb = inject(FormBuilder);

  form = this.fb.nonNullable.group({
    username: ['', Validators.required],
    skills: this.fb.array([]),
  });

  skillCount = signal(0);

  // Computed Signal
  canAddMore = computed(() => this.skillCount() < 5);

  // Getter for FormArray
  get skills(): FormArray {
    return this.form.get('skills') as FormArray;
  }

  // Add Control dinamically
  addSkill() {
    this.skills.push(this.fb.control('', Validators.required));
    this.skillCount.update((c) => c + 1);
  }

  // Remove Control Dynamically
  removeSkill(index: number) {
    this.skills.removeAt(index);
    this.skillCount.update((c) => c - 1);
  }

  submit() {
    console.log(this.form.value);
  }
}
