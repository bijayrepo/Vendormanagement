import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { VendorService } from '../../../vendor/services/vendor.service';
import {addVendor,addVendorFailure,addVendorSuccess} from '../actions/vendor.actions';
import { catchError, concatMap, exhaustMap, map, mergeMap, of } from 'rxjs';

@Injectable()
export class VendorEffects {
  constructor(private actions$: Actions, private vendorService: VendorService) {
    console.log('Effect: addVendor triggered with data:');
  }

  // loadVendors$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(VendorActions.loadVendors),
  //     mergeMap(() =>
  //       this.vendorService.getVendor().pipe(
  //         map(vendors => VendorActions.loadVendorsSuccess({ vendors })),
  //         catchError(error => of(VendorActions.loadVendorsFailure({ error: error.message })))
  //       )
  //     )
  //   )
  // );
  addVendor$ = createEffect(() =>
  this.actions$.pipe(
    ofType(addVendor),
    exhaustMap(action => {
      console.log('Effect: addVendor triggered with data:', action.vendor);

      return this.vendorService.addVendor(action.vendor).pipe(
        map(vendors => {
          console.log('Effect: Vendor added successfully. Response:', vendors);

          // Assuming API returns an array and we want the first vendor
          return addVendorSuccess({ vendor: vendors[0] });
        }),
        catchError(error => {
          console.error('Effect: Failed to add vendor. Error:', error);
          return of(addVendorFailure({ error: error.message }));
        })
      );
    })
  )
);

  
}
