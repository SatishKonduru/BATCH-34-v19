import { httpResource } from '@angular/common/http';
import { Injectable, Signal } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  users = httpResource<User[]>(() => ({
    url: 'https://jsonplaceholder.typicode.com/users',
  }));

  // for Route Parameters

  getUserById(userId: Signal<number | null>) {
    return httpResource<User>(() => {
      const id = userId();
      if (!id) return null;
      return {
        url: `https://jsonplaceholder.typicode.com/users/${id}`,
      };
    });
  }
}
