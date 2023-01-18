import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { LoginResponse } from 'src/app/interfaces/login-response.interface';
import { AuthService } from 'src/app/services/auth.service';
import { SignupFormComponent } from '../signup-form/signup-form.component';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})
export class LoginFormComponent implements OnInit {
  isLoading = false;
  constructor(
    public activeModal: NgbActiveModal,
    private modalService: NgbModal,
    private authService: AuthService,
    private toastr: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {}
  closeModal(sendData: any) {
    this.activeModal.close(sendData);
  }
  openModalRegister(sendData: any) {
    this.activeModal.close(sendData);
    const modalRef = this.modalService.open(SignupFormComponent, {
      scrollable: true,
      windowClass: 'myCustomModalClass',
      // keyboard: false,
      // backdrop: 'static'
    });
  }

  onSubmit(form: NgForm) {
    if (!form.valid) {
      this.toastr.error('Invalid Data');
      return;
    }
    const { email, password } = form.form.value;
    console.log(email, password);
    this.isLoading = true;
    this.authService.login(email, password).subscribe({
      next: (res: LoginResponse) => this.handleResponse(res),
      error: (err: Error) => this.handleError(err),
    });
  }

  handleResponse(res: LoginResponse) {
    console.log(res);
    this.toastr.success('Successfully logged in');
    this.isLoading = false;
    this.closeModal('loggedin');
    this.router.navigate(['/user/my-items']);
  }

  handleError(error: Error) {
    console.log(error);
    this.toastr.error('Verify your credentials');
    this.isLoading = false;
  }
}
