import { TestBed } from '@angular/core/testing';

import { KheaderService } from './kheader.service';

describe('KheaderService', () => {
  let service: KheaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KheaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
