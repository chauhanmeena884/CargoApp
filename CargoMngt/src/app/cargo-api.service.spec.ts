import { TestBed } from '@angular/core/testing';

import { CargoApiService } from './cargo-api.service';

describe('CargoApiService', () => {
  let service: CargoApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CargoApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
