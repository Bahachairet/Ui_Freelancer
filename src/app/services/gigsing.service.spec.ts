import { TestBed } from '@angular/core/testing';

import { GigsingService } from './gigsing.service';

describe('GigsingService', () => {
  let service: GigsingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GigsingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
