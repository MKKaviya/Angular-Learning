import { TestBed } from '@angular/core/testing';

import { BalancedSubstringsService } from './balanced-substrings.service';

describe('BalancedSubstringsService', () => {
  let service: BalancedSubstringsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BalancedSubstringsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
