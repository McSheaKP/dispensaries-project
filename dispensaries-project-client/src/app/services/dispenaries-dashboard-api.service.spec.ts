import { TestBed } from '@angular/core/testing';

import { DispenariesDashboardApiService } from './dispenaries-dashboard-api.service';

describe('DispenariesDashboardApiService', () => {
  let service: DispenariesDashboardApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DispenariesDashboardApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
