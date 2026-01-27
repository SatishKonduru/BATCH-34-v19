import { Component, signal } from '@angular/core';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-tdf-register',
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    MatRadioModule,
    MatSelectModule,
    MatCheckboxModule,
    CommonModule,
  ],
  templateUrl: './tdf-register.component.html',
  styleUrl: './tdf-register.component.css',
})
export class TdfRegisterComponent {
  username = signal('');
  email = signal('');
  gender = signal('male');
  country = signal('');
  acceptTerms = signal(false);
  countries = ['INDIA', 'USA', 'UK', 'AUSTRALIA'];
}
