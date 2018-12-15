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
    store.pipe(select("enthusiasts")).subscribe(list_data => {
      this.enthusiasts_list = list_data;
      console.log("Enthu list" + this.enthusiasts_list);
    });

    this.sortedData = this.enthusiasts_list.slice();
  }

  ngOnInit() {}

  sortData(sort: Sort) {
    const data = this.enthusiasts_list.slice();

    if (!sort.active || sort.direction === "") {
      this.sortedData = data;
      return;
    }

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

  compare = function(a: number | string, b: number | string, isAsc: boolean) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  };
}
