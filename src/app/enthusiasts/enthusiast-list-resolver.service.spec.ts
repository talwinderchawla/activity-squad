import { TestBed } from '@angular/core/testing';

import { EnthusiastListResolverService } from './enthusiast-list-resolver.service';

describe('EnthusiastListResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EnthusiastListResolverService = TestBed.get(EnthusiastListResolverService);
    expect(service).toBeTruthy();
  });
});
