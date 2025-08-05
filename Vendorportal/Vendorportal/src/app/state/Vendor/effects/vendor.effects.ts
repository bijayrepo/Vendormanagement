import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { VendorService } from '../../../vendor/services/vendor.service';
import * as VendorActions from '../actions/vendor.actions';
import { catchError, map, mergeMap, of } from 'rxjs';

@Injectable()
export class VendorEffects {
  constructor(private actions$: Actions, private vendorService: VendorService) {}

  loadVendors$ = createEffect(() =>
    this.actions$.pipe(
      ofType(VendorActions.loadVendors),
      mergeMap(() =>
        this.vendorService.getVendor().pipe(
          map(vendors => VendorActions.loadVendorsSuccess({ vendors })),
          catchError(error => of(VendorActions.loadVendorsFailure({ error: error.message })))
        )
      )
    )
  );

  addVendor$ = createEffect(() =>
    this.actions$.pipe(
      ofType(VendorActions.addVendor),
      mergeMap(action =>
        this.vendorService.addVendor(action.vendor).pipe(
          map(vendors => VendorActions.addVendorSuccess({ vendor: vendors[0] })),
          catchError(error => of(VendorActions.addVendorFailure({ error: error.message })))
        )
      )
    )
  );
}
