import { TestBed } from '@angular/core/testing';

import { ServicesDBService } from './services-db.service';

describe('ServicesDBService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServicesDBService = TestBed.get(ServicesDBService);
    expect(service).toBeTruthy();
  });
});
