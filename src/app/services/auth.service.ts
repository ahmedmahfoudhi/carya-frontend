import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { LoginResponse } from '../interfaces/login-response.interface';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(email: string, password: string) {
    return this.http.post<LoginResponse>(
      environment.backendUrl + 'auth/login',
      {
        email: email,
        password: password,
      }
    );
  }

  register(user: User) {
    return this.http.post(environment.backendUrl + 'auth/register', user);
  }
}
