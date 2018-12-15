import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { EnthusiastsListComponent } from "./enthusiasts-list/enthusiasts-list.component";
import { RouterModule } from "@angular/router";
import { MatListModule, MatSortModule, MatIconModule } from "@angular/material";
import { DatacheckGuard } from "./datacheck.guard";

export const ENTHUSIASTS_ROUTES = [
  { path: "", component: EnthusiastsListComponent , canActivate: [DatacheckGuard]}
];

@NgModule({
  declarations: [EnthusiastsListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(ENTHUSIASTS_ROUTES),
    MatListModule,
    MatSortModule,
    MatIconModule
  ]
})
export class EnthusiastsModule {}
