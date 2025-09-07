import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule,NgIf],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }
  onSubmit() {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      console.log('Login Attempt:', email, password);

      // TODO: Replace with AuthService call
      if (email === 'admin@test.com' && password === '12345') {
        this.router.navigate(['/user/dashboard']);
      } else {
        alert('Invalid credentials');
      }
    }
  }
   onForgotPassword() {
    this.router.navigate(['/auth/changepassword'])
  }

  onSignUp() {
    this.router.navigate(['/auth/signup'])
  }
}
