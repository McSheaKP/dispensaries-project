import { TestBed } from '@angular/core/testing';

import { DispensaryFilterService } from './dispensary-filter.service';

describe('DispensaryFilterService', () => {
  let service: DispensaryFilterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DispensaryFilterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
