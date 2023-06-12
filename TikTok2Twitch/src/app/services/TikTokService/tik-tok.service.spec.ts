import { TestBed } from '@angular/core/testing';

import { TikTokService } from './tik-tok.service';

describe('TikTokService', () => {
  let service: TikTokService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TikTokService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
