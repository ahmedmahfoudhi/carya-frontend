import { Component, OnInit } from '@angular/core';
import { faCoffee, faFilm } from '@fortawesome/free-solid-svg-icons';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  title = 'carya-frontend';
constructor(private authService:AuthService){}

ngOnInit(): void {
    this.authService.autoLogin();
}}


