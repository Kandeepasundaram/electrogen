import { TestBed } from '@angular/core/testing';

import { CoredbService } from './coredb.service';

describe('CoredbService', () => {
  let service: CoredbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoredbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
