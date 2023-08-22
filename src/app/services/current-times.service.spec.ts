import { TestBed } from '@angular/core/testing';

import { CurrentTimesService } from './current-times.service';

describe('CurrentTimesService', () => {
  let service: CurrentTimesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CurrentTimesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
