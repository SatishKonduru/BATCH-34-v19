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

  getUserByName(userName: Signal<string | null>) {
    return httpResource<User[]>(() => {
      const name = userName().trim();
      if (!name) return null;
      return {
        url: 'https://jsonplaceholder.typicode.com/users',
        params: { q: name },
      };
    });
  }

  // because we are using httpResource<User[]>
  // its value type is => User[] | null

  // Why?
  // -> Before API call => null
  // -> While Loading => null
  // -> After Success only => User[]

  createUser(newUser: Signal<User | null>) {
    return httpResource<User>(() => {
      const user = newUser();
      if (!user) return null;
      return {
        url: 'https://jsonplaceholder.typicode.com/users',
        method: 'POST',
        body: user,
      };
    });
  }
}
