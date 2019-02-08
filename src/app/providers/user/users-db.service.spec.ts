import { TestBed } from '@angular/core/testing';

import { UsersDBService } from './users-db.service';

describe('UsersDBService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UsersDBService = TestBed.get(UsersDBService);
    expect(service).toBeTruthy();
  });
});
