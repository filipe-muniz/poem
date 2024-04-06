import { TestBed } from '@angular/core/testing';

import { PoemsService } from './poems.service';

describe('PoemsService', () => {
  let service: PoemsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PoemsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
