import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Vendor } from '../../vendor/model/vendeor.model';
import { Store } from '@ngrx/store';
import { AppState } from '../../../app/state/Vendor/app.state';
import * as VendorActions from '../../../app/state/Vendor/actions/vendor.actions';
import { MatCard } from "@angular/material/card";
import { MatInputModule } from "@angular/material/input";
import { NgIf } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-registration-form',
  imports: [MatCard, MatInputModule,ReactiveFormsModule,ReactiveFormsModule, NgIf, MatFormFieldModule, MatInputModule, MatButtonModule],
  templateUrl: './registration-form.html',
  styleUrl: './registration-form.css'
})
export class RegistrationForm {
  registrationForm!: FormGroup;
  submitted = false;

  // vendor: Vendor = {
  //   companyName: '',
  //   contactName: '',
  //   contactEmail: '',
  //   contactPhone: '',
  //   address: '',
  //   city: '',
  //   state: '',
  //   country: '',
  //   gstNumber: '',
  //   panNumber: '',
  //   createdAt: new Date(),
  //   updatedAt: new Date()
  // };
  constructor(private fb: FormBuilder,
    private store: Store<AppState>
  ) {
    // this.registrationForm = this.fb.group({
    //   fullName: ['', [Validators.required, Validators.minLength(3)]],
    //   email: ['', [Validators.required, Validators.email]],
    //   password: ['', [Validators.required, Validators.minLength(6)]],
    //   confirmPassword: ['', Validators.required],
    //   terms: [false, Validators.requiredTrue]
    // }, { validators: this.passwordMatchValidator });
  }
  ngOnInit(): void {
    this.registrationForm = this.fb.group({
      companyName: ['', Validators.required],
      contactName: ['', Validators.required],
      contactEmail: ['', [Validators.required, Validators.email]],
      contactPhone: ['', [Validators.required, Validators.pattern(/^\+?[0-9]{10,15}$/)]],
      address: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      country: ['', Validators.required],
      gstNumber: ['', Validators.required],
      panNumber: ['', Validators.required],
    });
  }

  passwordMatchValidator(form: FormGroup) {
    return form.get('password')?.value === form.get('confirmPassword')?.value
      ? null : { mismatch: true };
  }

  get f() {
    return this.registrationForm.controls;
  }

  onSubmit() {
    if (this.registrationForm.valid) {
      const vendor: Vendor = {
        ...this.registrationForm.value,
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      console.log(vendor)
      //this.store.dispatch(addVendor({ vendor: formValue }));
      this.store.dispatch(VendorActions.addVendor({ vendor }));
      //this.registrationForm.reset();
    } else {
      this.registrationForm.markAllAsTouched();
    }
  }
}