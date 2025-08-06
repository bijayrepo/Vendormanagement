import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable } from 'rxjs';
import { Vendor } from '../model/vendeor.model';
@Injectable({
  providedIn: 'root'
})
export class VendorService {
  private apiUrl="http://localhost:5287/api/";
  constructor(private http:HttpClient){}
  addVendor(vendor: Vendor): Observable<Vendor[]> {
    console.log('Api call');
    return this.http.post<Vendor[]>(`${this.apiUrl}/Vendors/register`, vendor);
  }
  getVendor(): Observable<Vendor[]>{
    return this.http.get<Vendor[]>(this.apiUrl);
  }
}