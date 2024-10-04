import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private userService: UserService, private router: Router) {}

  login() {
    this.userService
      .login({ username: this.username, password: this.password })
      .subscribe(
        (response) => {
          // Navigate to pond management page upon successful login
          this.router.navigate(['/pond-management']);
        },
        (error) => {
          // Handle error, like displaying incorrect credentials
          this.errorMessage = 'Invalid login credentials';
        }
      );
  }
}
