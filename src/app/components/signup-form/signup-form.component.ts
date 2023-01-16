import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginFormComponent } from '../login-form/login-form.component';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal,private modalService: NgbModal) { }

  ngOnInit(): void {

  }
  closeModal(sendData: any) {
    this.activeModal.close(sendData);
  }
  openModalLogin(sendData: any) {
    this.activeModal.close(sendData);
    const modalRef = this.modalService.open(LoginFormComponent,
      {
        scrollable: true,
        windowClass: 'myCustomModalClass',
        // keyboard: false,
        // backdrop: 'static'
      });
  }
}

