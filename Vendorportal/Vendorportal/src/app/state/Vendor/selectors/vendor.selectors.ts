import { createFeatureSelector, createSelector } from '@ngrx/store';
import { VendorState } from '../reducers/vendor.reducer';

export const selectVendorState=createFeatureSelector<VendorState>('vendor');

export const selectAllVendorState=createSelector(selectVendorState,state=>state.vendors);
export const selectVendorLoading = createSelector(selectVendorState, state => state.loading);
export const selectVendorError = createSelector(selectVendorState, state => state.error);