import { TestBed } from '@angular/core/testing';

import { FrhttpserviceService } from './frhttpservice.service';

describe('FrhttpserviceService', () => {
  let service: FrhttpserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FrhttpserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
