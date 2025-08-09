import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { shareModule } from '../../../core/Shared/shared';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-vendor-form',
  imports: [shareModule],
  templateUrl: './vendor-form.html',
  styleUrl: './vendor-form.css'
})
export class VendorForm implements OnInit {
  @Input() initialData:any={};
  @Output() formSubmit=new EventEmitter<any>();
  vendorForm!:FormGroup;
  constructor(private fb:FormBuilder){}
  ngOnInit(): void {
    this.vendorForm = this.fb.group({
      companyName: [this.initialData.companyName || '', Validators.required],
      contactName: [this.initialData.contactName || '', Validators.required],
      contactEmail: [this.initialData.contactEmail || '', [Validators.required, Validators.email]],
      contactPhone: [this.initialData.contactPhone || '', Validators.required],
      address: [this.initialData.address || ''],
      city: [this.initialData.city || ''],
      state: [this.initialData.state || ''],
      country: [this.initialData.country || ''],
      gstNumber: [this.initialData.gstNumber || ''],
      panNumber: [this.initialData.panNumber || ''],
      createdAt: [this.initialData.createdAt || new Date()],
      updatedAt: [this.initialData.updatedAt || new Date()]
    });
  }
  submitForm(){
    if(this.vendorForm.valid){
      this.formSubmit.emit(this.vendorForm.value);
    }else{
      this.vendorForm.markAsTouched();
    }
  }

}
