import { TestBed } from '@angular/core/testing';

import { FortunaComService } from './fortuna-com.service';

describe('FortunaComService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FortunaComService = TestBed.get(FortunaComService);
    expect(service).toBeTruthy();
  });
});
