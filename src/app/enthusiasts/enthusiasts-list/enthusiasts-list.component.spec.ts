import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnthusiastsListComponent } from './enthusiasts-list.component';
import { RouterModule } from '@angular/router';
import { MatListModule, MatIconModule, MatSortModule } from '@angular/material';
import { ENTHUSIASTS_ROUTES } from '../enthusiasts.module';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule } from '@ngrx/store';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { enthusiastsListReducer } from '../../Store/enthusiastsList.reducer';

describe('EnthusiastsListComponent', () => {
  let component: EnthusiastsListComponent;
  let fixture: ComponentFixture<EnthusiastsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnthusiastsListComponent ],
      imports: [
        RouterModule.forChild(ENTHUSIASTS_ROUTES),
        RouterTestingModule,
        MatListModule,
        MatSortModule,
        MatIconModule, 
        StoreModule.forRoot( { enthusiasts: enthusiastsListReducer }),
        BrowserAnimationsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnthusiastsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
