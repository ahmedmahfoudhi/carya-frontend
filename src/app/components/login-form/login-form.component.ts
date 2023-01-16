import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SignupFormComponent } from '../signup-form/signup-form.component';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal,private modalService: NgbModal) { }

  ngOnInit(): void {

  }
  closeModal(sendData: any) {
    this.activeModal.close(sendData);
  }
  openModalRegister(sendData: any) {
    this.activeModal.close(sendData);
    const modalRef = this.modalService.open(SignupFormComponent,
      {
        scrollable: true,
        windowClass: 'myCustomModalClass',
        // keyboard: false,
        // backdrop: 'static'
      });
  }

}

