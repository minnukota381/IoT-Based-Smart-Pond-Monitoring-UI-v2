import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = 'http://localhost:8080/api/users'; // Update based on your Spring Boot API URL
  private adminCredentials = {
    username: 'admin', // Predefined admin username
    password: 'adminPassword', // Predefined admin password (use environment variables for production)
  };

  constructor(private http: HttpClient) {}

  // Register a new user
  register(user: {
    username: string;
    email: string;
    password: string;
  }): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, user);
  }

  // Login a user or admin
  login(credentials: { username: string; password: string }): Observable<any> {
    // Check if the credentials match the admin credentials
    if (
      credentials.username === this.adminCredentials.username &&
      credentials.password === this.adminCredentials.password
    ) {
      return of({ role: 'ADMIN' }); // Simulate a successful admin login
    }

    // For regular users, call the API
    return this.http.post(`${this.apiUrl}/login`, credentials);
  }
}
