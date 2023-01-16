import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginFormComponent } from 'src/app/components/login-form/login-form.component';
import { SignupFormComponent } from 'src/app/components/signup-form/signup-form.component';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private modalService: NgbModal,) {}
  ngOnInit() {
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


