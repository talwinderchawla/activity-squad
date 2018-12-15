import { Component, OnInit } from "@angular/core";
import { Store, select } from "@ngrx/store";
import { enthusiast } from "../../Store/enthusiast.model";
import { Sort } from "@angular/material";

@Component({
  selector: "app-enthusiasts-list",
  templateUrl: "./enthusiasts-list.component.html",
  styleUrls: ["./enthusiasts-list.component.less"]
})
export class EnthusiastsListComponent implements OnInit {
  enthusiasts_list: Array<enthusiast>;
  sortedData: Array<enthusiast>;
  constructor(private store: Store<{ enthusiasts: Array<enthusiast> }>) {
    // Checking Store for enthusiasts list and subscribing to it.
    store.pipe(select("enthusiasts")).subscribe(list_data => {
      this.enthusiasts_list = list_data;
    });

    // Updated sortedData variable which will be used by the sort functionality.
    this.sortedData = this.enthusiasts_list.slice();
  }

  ngOnInit() {}

  /**
   * This method sorts the data.
   * @param sort of type Sort
   */
  sortData(sort: Sort) {
    const data = this.enthusiasts_list.slice();

    // Try to sort the data if the sorting is active and has direction ASC or DESC
    if (!sort.active || sort.direction === "") {
      this.sortedData = data;
      return;
    }

    // Use typescript sort method
    this.sortedData = data.sort((a, b) => {
      const isAsc = sort.direction === "asc";

      switch (sort.active) {
        case "activity":
          return this.compare(a.firstName, b.firstName, isAsc);
        case "firstName":
          return this.compare(a.firstName, b.firstName, isAsc);
        default:
          return 0;
      }
    });
  }

  // Compare function which will compare two values and return accordingly 1 or -1
  compare = function(a: string, b: string, isAsc: boolean) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  };
}
