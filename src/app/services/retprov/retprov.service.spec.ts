import { TestBed } from '@angular/core/testing';

import { RetprovService } from './retprov.service';

describe('RetprovService', () => {
  let service: RetprovService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RetprovService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
