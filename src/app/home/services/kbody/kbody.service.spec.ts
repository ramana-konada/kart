import { TestBed } from '@angular/core/testing';

import { KbodyService } from './kbody.service';

describe('KbodyService', () => {
  let service: KbodyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KbodyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
