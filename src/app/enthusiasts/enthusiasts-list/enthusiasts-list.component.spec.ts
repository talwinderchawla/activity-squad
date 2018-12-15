import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { EnthusiastsListComponent } from "./enthusiasts-list.component";
import { RouterModule } from "@angular/router";
import {
  MatListModule,
  MatIconModule,
  MatSortModule,
  Sort
} from "@angular/material";
import { ENTHUSIASTS_ROUTES } from "../enthusiasts.module";
import { RouterTestingModule } from "@angular/router/testing";
import { StoreModule } from "@ngrx/store";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { enthusiastsListReducer } from "../../Store/enthusiastsList.reducer";
import { enthusiast } from "../../Store/enthusiast.model";

describe("EnthusiastsListComponent", () => {
  let component: EnthusiastsListComponent;
  let fixture: ComponentFixture<EnthusiastsListComponent>;
  let sort: Sort;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EnthusiastsListComponent],
      imports: [
        RouterModule.forChild(ENTHUSIASTS_ROUTES),
        RouterTestingModule,
        MatListModule,
        MatSortModule,
        MatIconModule,
        StoreModule.forRoot({ enthusiasts: enthusiastsListReducer }),
        BrowserAnimationsModule
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnthusiastsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should test sortData method", () => {
    sort = { active: "activity", direction: "desc" };
    //  enthusiasts_list: Array<enthusiast>;
    // sortedData: Array<enthusiast>;
    component.enthusiasts_list = Array<enthusiast>();
    component.enthusiasts_list.push({
      firstName: "Donald",
      lastName: "Duck",
      emailAddress: "Donal.duck@disney.com",
      activity: { name: "Hockey", value: "hockey" },
      comments: "I would like to volunteer if allowed."
    });
    component.enthusiasts_list.push({
      firstName: "Mickey",
      lastName: "Mouse",
      emailAddress: "Mickey.Mouse@disney.com",
      activity: { name: "Carrom", value: "carrom" },
      comments: "I would like to volunteer if allowed."
    });

    component.sortData(sort);

    expect(component.sortedData[0].activity.value).not.toBe(
      component.enthusiasts_list[0].activity.value
    );
  });
});
