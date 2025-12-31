import { Component, inject } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-users',
  imports: [],
  templateUrl: './all-users.component.html',
  styleUrl: './all-users.component.css',
})
export class AllUsersComponent {
  private _userService = inject(UserService);
  private _router = inject(Router);
  users = this._userService.users;

  onSelect(user: any) {
    this._router.navigate(['/userDetails', user.id]);
  }
}
