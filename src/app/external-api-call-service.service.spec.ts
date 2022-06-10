import { TestBed } from '@angular/core/testing';

import { ExternalApiCallServiceService } from './external-api-call-service.service';

describe('ExternalApiCallServiceService', () => {
  let service: ExternalApiCallServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExternalApiCallServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
