import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnthusiastsListComponent } from './enthusiasts-list.component';

describe('EnthusiastsListComponent', () => {
  let component: EnthusiastsListComponent;
  let fixture: ComponentFixture<EnthusiastsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnthusiastsListComponent ]
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
