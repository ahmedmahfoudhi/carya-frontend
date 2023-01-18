import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Subject, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LoginResponse } from '../interfaces/login-response.interface';
import { currentUser} from '../models/currentUser.model';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  userSubject= new BehaviorSubject<any>(null);
  constructor(private http: HttpClient,private router:Router) {}

  login(email: string, password: string) {
    return this.http.post<LoginResponse>(
      environment.backendUrl + 'auth/login',
      {
        email: email,
        password: password,
      }
    ).pipe(tap((resData=>{
      const expirationDate =new Date(new Date().getTime() + +resData.expiresIn *1000);
      const curUser=new currentUser(resData.email,resData.token,expirationDate);
      this.userSubject.next(curUser); 
    })));
  }

  register(user: User) {
    return this.http.post(environment.backendUrl + 'auth/register', user);
  }

  logout(){
    this.userSubject.next(null);
    this.router.navigate(["/"]);
  }
}
