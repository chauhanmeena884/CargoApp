import { Component } from '@angular/core';
import { AuthService } from '../auth-service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login-component',
  imports: [CommonModule, FormsModule],
  templateUrl: './login-component.html',
  styleUrl: './login-component.css',
})
export class LoginComponent {
  username = '';
  password = '';
  registerMode = false;
  registerUsername = '';
  registerPassword = '';
  registerRole = 'CargoManager';
  loading = false;
  error = '';

  constructor(private auth: AuthService, private router: Router) {}

  login(): void {
    this.error = '';
    this.loading = true;

    this.auth.login(this.username, this.password).subscribe({
      next: () => {
        this.router.navigate(['/products']);
      },
      error: () => {
        this.error = 'Login failed. Check your credentials and try again.';
        this.loading = false;
      },
    });
  }

  toggleRegister(): void {
    this.registerMode = !this.registerMode;
    this.error = '';
  }

  register(): void {
    this.error = '';
    this.loading = true;
    this.auth.register(this.registerUsername, this.registerPassword, this.registerRole).subscribe({
      next: () => {
        this.registerMode = false;
        this.loading = false;
        this.error = 'Account created. Please sign in.';
      },
      error: () => {
        this.error = 'Registration failed. Please try a different username.';
        this.loading = false;
      },
    });
  }
}
