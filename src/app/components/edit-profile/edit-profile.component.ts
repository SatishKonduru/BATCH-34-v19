import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButton } from '@angular/material/button';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-edit-profile',
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButton,
    RouterLink,
    RouterLink,
  ],
  templateUrl: './edit-profile.component.html',
  styleUrl: './edit-profile.component.css',
})
export class EditProfileComponent {
  isSaved = true;
  user = {
    name: 'Satish Konduru',
    email: 'satish@example.com',
    bio: 'Full Stack AI Developer',
  };
  onInputChange() {
    this.isSaved = false;
  }
  saveChanges() {
    this.isSaved = true;
    alert('Profile Saved Successfully');
  }
  // The canDeactivate Guard uses the following method to kbow whether changes are saved or not?
  hasUnsavedChanges(): boolean {
    return !this.isSaved;
  }
}
