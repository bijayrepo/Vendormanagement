import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationRoutingModule } from './registration-routing-module';
import { RegistrationForm } from './registration-form/registration-form';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { reducer } from '../state/Vendor/reducers/vendor.reducer';
import { VendorEffects } from '../state/Vendor/effects/vendor.effects';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    RegistrationRoutingModule,
    RegistrationForm,
    //StoreModule.forRoot({}),
    
    StoreModule.forRoot({ vendor: reducer }),
    //EffectsModule.forFeature([VendorEffects]),

    EffectsModule.forRoot([VendorEffects]),
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
  ]
})
export class RegistrationModule { }
