import { TestBed } from '@angular/core/testing';

import { NedbService } from './nedb.service';

describe('NedbService', () => {
  let service: NedbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NedbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
