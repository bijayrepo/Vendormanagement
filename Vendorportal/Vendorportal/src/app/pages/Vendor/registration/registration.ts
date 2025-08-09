import { Component } from '@angular/core';
import { shareModule } from '../../../core/Shared/shared';
import { VendorForm } from "../../../shared/reuseableComponents/vendor-form/vendor-form";
import { IVendor } from '../../../core/models/interfaces/vendor';
import { VendorService } from '../../../vendor/services/vendor.service'; 

@Component({
  selector: 'app-registration',
  imports: [shareModule, VendorForm],
  templateUrl: './registration.html',
  styleUrl: './registration.css'
})
export class Registration {
vendorData:IVendor = {
  companyName: '',
  contactName: '',
  contactEmail: '',
  contactPhone: '',
  address: '',
  city: '',
  state: '',
  country: '',
  gstNumber: '',
  panNumber: '',
  createdAt: new Date(),
  updatedAt: new Date()
};
constructor(private Vendorservices:VendorService){}
saveVendor(vendor:any){
  console.log('Vendor form submitted:',vendor);
  this.Vendorservices.addVendor(vendor).subscribe({
    next:(res)=>{
      console.log('Vendor saved',res);
      alert('Verdor saved successfully!');
    },
    error:(err)=>{
      console.error('Error saving vendor',err);
    }
  })
}
}
