import { TestBed } from '@angular/core/testing';

import { ApisServiceService } from './apis-service.service';

describe('ApisServiceService', () => {
  let service: ApisServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApisServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
