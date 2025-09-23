import { TestBed } from '@angular/core/testing';

import { RconService } from './rcon';

describe('RconService', () => {
  let service: RconService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RconService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
