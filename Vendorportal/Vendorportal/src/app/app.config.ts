import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { provideHttpClient } from '@angular/common/http';
import { VendorEffects } from './state/Vendor/effects/vendor.effects';
import { reducer } from './state/Vendor/reducers/vendor.reducer';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes),
    provideHttpClient(),
 
    provideStore({vendor:reducer}),
    //provideEffects([VendorEffects]),
    
    
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() })
]
};
