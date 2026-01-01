import { Component, inject, signal } from '@angular/core';
import { UserService } from '../../services/user.service';
import { MatFormField } from '@angular/material/form-field';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-user-search',
  imports: [MatFormFieldModule, MatInputModule, CommonModule],
  templateUrl: './user-search.component.html',
  styleUrl: './user-search.component.css',
})
export class UserSearchComponent {
  searchText = signal('');
  private _userService = inject(UserService);
  user = this._userService.getUserByName(this.searchText);
}
