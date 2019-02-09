import { TestBed } from '@angular/core/testing';

import { CategoryDBService } from './category-db.service';

describe('CategoryDBService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CategoryDBService = TestBed.get(CategoryDBService);
    expect(service).toBeTruthy();
  });
});
