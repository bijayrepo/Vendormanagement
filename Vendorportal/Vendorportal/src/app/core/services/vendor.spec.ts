import { TestBed } from '@angular/core/testing';

import { Vendorservices } from './vendor';

describe('Vendor', () => {
  let service: Vendorservices;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Vendorservices);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
