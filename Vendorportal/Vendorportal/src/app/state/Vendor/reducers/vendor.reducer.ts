import { createReducer, on } from '@ngrx/store';
import * as VendorActions from '../actions/vendor.actions'
import { Vendor } from '../../../vendor/model/vendeor.model';

export const vendorFeatureKey = 'vendor';

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
  on(VendorActions.loadVendors, state=>({...state,loading:true})),
  on(VendorActions.loadVendorsSuccess,(state,{vendors})=>({
    ...state,
    vendors,
    loading:false,
    error:null,
  })),
  on(VendorActions.addVendor,state=>({...state,loading:true})),
  on(VendorActions.addVendorSuccess,(state,{vendor})=>({
    ...state,
    vendor:[...state.vendors,vendor],
    loading:false,
  })),
  on(VendorActions.addVendorFailure,(state,{error})=>({
    ...state,
    loading:false,
    error,
  }))
);

