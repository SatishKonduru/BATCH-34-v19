import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isLoggedInStatus = false;
  constructor() {}
  login(username: string, password: string) {
    if (username === 'admin' && password === '1234') {
      this.isLoggedInStatus = true;
      localStorage.setItem('token', 'sample-token');
      return true;
    }
    return false;
  }

  logout() {
    this.isLoggedInStatus = false;
    localStorage.removeItem('token');
  }

  isLoggedIn() {
    return this.isLoggedInStatus || !!localStorage.getItem('token');
  }
}
