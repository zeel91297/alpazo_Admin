import { TestBed } from '@angular/core/testing';

import { ProductsDBService } from './products-db.service';

describe('ProductsDBService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProductsDBService = TestBed.get(ProductsDBService);
    expect(service).toBeTruthy();
  });
});
