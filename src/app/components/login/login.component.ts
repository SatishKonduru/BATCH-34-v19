import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  imports: [MatButtonModule, MatFormFieldModule, MatInputModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  username = '';
  password = '';
  private _authService = inject(AuthService);
  private _router = inject(Router);
  onLogin() {
    console.log('Username: ', this.username);
    console.log('Password: ', this.password);
    const success = this._authService.login(this.username, this.password);
    if (success) {
      this._router.navigate(['/dashboard']);
    } else {
      alert('Invalid Credentials');
    }
  }
}
