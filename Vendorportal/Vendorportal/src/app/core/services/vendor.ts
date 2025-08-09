import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment'; 
import { HttpClient } from '@angular/common/http';
import { Constant } from '../Constant/Constants';
import { IVendor } from '../models/interfaces/vendor';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class Vendorservices {
  constructor(private http:HttpClient){}
  
  getAllVendor(){
    this.http.get(environment.apiurl+Constant.MODULE_NAME.Vendor+Constant.API_METHODS.Vendor_Service.Get_All_Vendors);
  }
  addVendor(vendor:IVendor):Observable<IVendor>{
    return this.http.post<IVendor>(environment.apiurl+Constant.MODULE_NAME.Vendor+Constant.API_METHODS.Vendor_Service.Add_Vendor,vendor)
  }
}