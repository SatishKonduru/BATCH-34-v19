import { Component, inject, signal } from '@angular/core';
import { UserService } from '../../services/user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-details',
  imports: [],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css',
})
export class UserDetailsComponent {
  userId = signal<number | null>(null);
  private _userService = inject(UserService);
  private _activatedRoute = inject(ActivatedRoute);
  constructor() {
    this._activatedRoute.paramMap.subscribe((p) => {
      const id = p.get('id');
      this.userId.set(id ? +id : null);
    });
  }

  user = this._userService.getUserById(this.userId);
}
