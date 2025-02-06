import { TestBed } from '@angular/core/testing';

import { SharedetatService } from './sharedetat.service';

describe('SharedetatService', () => {
  let service: SharedetatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SharedetatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
