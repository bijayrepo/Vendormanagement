import { createReducer, on } from '@ngrx/store';
import * as VendorActions from '../actions/vendor.actions'
import { Vendor } from '../../../vendor/model/vendeor.model';

//export const vendorFeatureKey = 'vendor';

export interface VendorState {
vendors:Vendor[];
loading:boolean;
error:string|null;
}

export const initialState: VendorState = {
vendors:[],
loading:false,
error:null,
};

export const reducer = createReducer(
  initialState,

  // Load Vendors
  on(VendorActions.loadVendors, state => {
    console.log('Reducer: loadVendors - setting loading to true');
    return { ...state, loading: true };
  }),

  on(VendorActions.loadVendorsSuccess, (state, { vendors }) => {
    console.log('Reducer: loadVendorsSuccess - vendors loaded:', vendors);
    return {
      ...state,
      vendors,
      loading: false,
      error: null,
    };
  }),

  // Add Vendor
  on(VendorActions.addVendor, state => {
    console.log('Reducer: addVendor - setting loading to true');
    return { ...state, loading: true };
  }),

  on(VendorActions.addVendorSuccess, (state, { vendor }) => {
    console.log('Reducer: addVendorSuccess - new vendor added:', vendor);
    return {
      ...state,
      vendors: [...state.vendors, vendor], // Fixed: key was `vendor` instead of `vendors`
      loading: false,
    };
  }),

  on(VendorActions.addVendorFailure, (state, { error }) => {
    console.error('Reducer: addVendorFailure - error occurred:', error);
    return {
      ...state,
      loading: false,
      error,
    };
  })
);