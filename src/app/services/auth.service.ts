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
  private tokenExpirationTimer:any;
  constructor(private http: HttpClient,private router:Router) {}

  login(email: string, password: string) {
    return this.http.post<LoginResponse>(
      environment.backendUrl + '/auth/login',
      {
        email: email,
        password: password,
      }
    ).pipe(tap((resData=>{
      this.handleAuth(resData.email,resData.token,+resData.expiresIn);
    })));
  }

  private handleAuth(email:string,token:string,expiresIn:number){
    const expirationDate =new Date(new Date().getTime() + expiresIn *1000);
    const curUser=new currentUser(email,token,expirationDate);
    this.userSubject.next(curUser); 
    this.autoLogout(expiresIn * 1000)
    localStorage.setItem('user',JSON.stringify(curUser));
  }
  register(user: User) {
    return this.http.post(environment.backendUrl + '/auth/register', user);
  }

  logout(){
    this.userSubject.next(null);
    localStorage.clear();
    this.router.navigate(["/"]);
    if(this.tokenExpirationTimer){
      clearTimeout(this.tokenExpirationTimer);
    }
    this.tokenExpirationTimer=null;
  }
  autoLogin(){
    const user:{
      email:string,
      _token:string,
      _expriresIn:string
    }=JSON.parse(localStorage.getItem('user')!);
    if(!user)
    return ;

    const loadedUser=new currentUser(user.email,user._token,new Date(user._expriresIn));
    if(loadedUser.token){
      const expirationDuration=new Date(user._expriresIn).getTime()-new Date().getTime();
      this.autoLogout(expirationDuration);
      this.userSubject.next(loadedUser);
    }

  }

  autoLogout(expirationDate:number){
    this.tokenExpirationTimer=setTimeout(()=>{
      this.logout();
    },expirationDate); 
  }
}
