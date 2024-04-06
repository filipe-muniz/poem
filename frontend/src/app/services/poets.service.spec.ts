import { TestBed } from '@angular/core/testing';

import { PoetsService } from './poets.service';

describe('PoetsService', () => {
  let service: PoetsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PoetsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
