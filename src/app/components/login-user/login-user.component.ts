import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css'],
})
export class LoginUserComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private userService: UserService, private router: Router) {}

  login() {
    this.userService
      .login({ username: this.username, password: this.password })
      .subscribe(
        (res) => {
          console.log('Login successful', res);
          // Redirect to pond-management page on success
          this.router.navigate(['/pond-management']);
        },
        (err) => {
          this.errorMessage =
            err.error.message || 'Invalid username or password';
          console.error('Login failed', err);
        }
      );
  }
}
