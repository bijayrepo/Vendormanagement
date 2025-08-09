import { createAction, createActionGroup, emptyProps, props } from '@ngrx/store';
import { Vendor } from '../../../vendor/model/vendeor.model';


export const loadVendors = createAction('[Vendor] Load Vendors');
export const loadVendorsSuccess = createAction('[Vendor] Load Vendors Success', props<{ vendors: Vendor[] }>());
export const loadVendorsFailure = createAction('[Vendor] Load Vendors Failure', props<{ error: string }>());

export const addVendor = createAction('[Vendor] Add Vendor', props<{ vendor: Vendor }>());
export const addVendorSuccess = createAction('[Vendor] Add Vendor Success', props<{ vendor: Vendor }>());
export const addVendorFailure = createAction('[Vendor] Add Vendor Failure', props<{ error: string }>());
