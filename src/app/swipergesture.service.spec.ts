import { TestBed } from '@angular/core/testing';

import { SwipergestureService } from './swipergesture.service';

describe('SwipergestureService', () => {
  let service: SwipergestureService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SwipergestureService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
