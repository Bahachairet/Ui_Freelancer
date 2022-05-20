import { TestBed } from '@angular/core/testing';

import { FreelancerrserviceService } from './freelancerrservice.service';

describe('FreelancerrserviceService', () => {
  let service: FreelancerrserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FreelancerrserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
