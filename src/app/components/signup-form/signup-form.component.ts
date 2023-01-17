import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { ErrorResponse } from 'src/app/interfaces/error-response.interface';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';
import { LoginFormComponent } from '../login-form/login-form.component';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css'],
})
export class SignupFormComponent implements OnInit {
  isLoading = false;
  constructor(
    public activeModal: NgbActiveModal,
    private modalService: NgbModal,
    private toastr: ToastrService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {}
  closeModal(sendData: any) {
    this.activeModal.close(sendData);
  }
  openModalLogin(sendData: any) {
    this.activeModal.close(sendData);
    const modalRef = this.modalService.open(LoginFormComponent, {
      scrollable: true,
      windowClass: 'myCustomModalClass',
      // keyboard: false,
      // backdrop: 'static'
    });
  }

  onSubmit(f: NgForm) {
    if (!f.valid) {
      this.toastr.error('Invalid Data');
      return;
    }
    this.isLoading = true;
    const values = f.form.value;
    const user = {
      email: values.email,
      password: values.password,
      cin: values.cin,
      firstName: values.firstName,
      lastName: values.lastName,
    };
    this.authService.register(user).subscribe({
      next: () => this.handleResponse(),
      error: ({ error }) => this.handleError(error),
    });
  }

  handleResponse() {
    this.toastr.success(
      'Account created successfully, now you can login so that you can rent properties'
    );
    this.openModalLogin('login');
  }

  handleError(error: ErrorResponse) {
    console.log(error);
    const message = error?.message;
    let errorMessage = message[0];
    console.log(typeof message);
    if (typeof message == 'string') {
      errorMessage = message;
    }
    this.toastr.error(errorMessage);
    this.isLoading = false;
  }
}
