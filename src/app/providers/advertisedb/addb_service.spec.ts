import { TestBed } from '@angular/core/testing';

import { AddbService } from './addb_service';

describe('AddbService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddbService = TestBed.get(AddbService);
    expect(service).toBeTruthy();
  });
});
