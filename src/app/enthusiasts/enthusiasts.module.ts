import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { EnthusiastsListComponent } from "./enthusiasts-list/enthusiasts-list.component";
import { RouterModule } from "@angular/router";
import { MatListModule, MatSortModule } from "@angular/material";

export const ENTHUSIASTS_ROUTES = [
  { path: "", component: EnthusiastsListComponent }
];

@NgModule({
  declarations: [EnthusiastsListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(ENTHUSIASTS_ROUTES),
    MatListModule,
    MatSortModule
  ]
})
export class EnthusiastsModule {}
