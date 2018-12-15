import { TestBed, async, inject } from '@angular/core/testing';

import { DatacheckGuard } from './datacheck.guard';
import { StoreModule } from '@ngrx/store';
import { enthusiastsListReducer } from '../Store/enthusiastsList.reducer';

describe('DatacheckGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DatacheckGuard],
      imports: [StoreModule.forRoot( { enthusiasts: enthusiastsListReducer })]
    });
  });

  it('should ...', inject([DatacheckGuard], (guard: DatacheckGuard) => {
    expect(guard).toBeTruthy();
  }));
});
