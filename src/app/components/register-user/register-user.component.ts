import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css'],
})
export class RegisterUserComponent {
  username: string = '';
  email: string = ''; // Add this line
  password: string = '';

  constructor(private userService: UserService, private router: Router) {}

  register() {
    // Update the register method to include email
    this.userService
      .register({
        username: this.username,
        email: this.email,
        password: this.password,
      })
      .subscribe(
        (res) => {
          console.log('Registration successful', res);
          this.router.navigate(['/login']); // Navigate to login page
        },
        (err) => {
          console.error('Registration failed', err);
        }
      );
  }
}
