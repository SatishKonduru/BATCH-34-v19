import { Component, inject, signal } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { User } from '../../models/user.model';
import { UserService } from '../../services/user.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-create-user',
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    CommonModule,
  ],
  templateUrl: './create-user.component.html',
  styleUrl: './create-user.component.css',
})
export class CreateUserComponent {
  newUser = signal<User | null>(null);
  private _userService = inject(UserService);

  createUserResource = this._userService.createUser(this.newUser);
  userFormSubmit(userForm: any) {
    // console.log('form Values: ', userForm.value);
    if (userForm.valid) {
      this.newUser.set({
        name: userForm.value.name,
        email: userForm.value.email,
        phone: userForm.value.phone,
      });
    }
    // userForm.reset();
  }
}
