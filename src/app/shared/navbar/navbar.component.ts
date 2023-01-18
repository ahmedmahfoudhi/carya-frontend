import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';
import { LoginFormComponent } from 'src/app/components/login-form/login-form.component';
import { SignupFormComponent } from 'src/app/components/signup-form/signup-form.component';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit ,OnDestroy{
  private userSub!:Subscription; 
  isAuthenticated=false;

  constructor(private modalService: NgbModal,private authService: AuthService) {}
  ngOnInit() {
    this.userSub=this.authService.userSubject.subscribe(
      user=>{
        this.isAuthenticated = !!user;
        console.log(this.isAuthenticated);
        
      }
    )
  }

  ngOnDestroy() {
      this.userSub.unsubscribe();
  }
  openModalLogin() {
    const modalRef = this.modalService.open(LoginFormComponent,
      {
        scrollable: true,
        windowClass: 'myCustomModalClass',
        // keyboard: false,
        // backdrop: 'static'
      });
  }
  openModalRegister() {
    const modalRef = this.modalService.open(SignupFormComponent,
      {
        scrollable: true,
        windowClass: 'myCustomModalClass',
        // keyboard: false,
        // backdrop: 'static'
      });

  }
}


