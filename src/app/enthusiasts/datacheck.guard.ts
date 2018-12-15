import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from "@angular/router";
import { Observable, of } from "rxjs";
import { Store, select } from "@ngrx/store";
import { enthusiast } from "../Store/enthusiast.model";

@Injectable({
  providedIn: "root"
})
export class DatacheckGuard implements CanActivate {
  private dataExists: boolean = false;

  constructor(private store: Store<{ enthusiasts: Array<enthusiast> }>) {}
  // In canActivate Route Guard checking if the list has any data otherwise don't allow route.
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    this.store.pipe(select("enthusiasts")).subscribe(list_data => {
      this.dataExists = list_data.length > 0;
    });

    //Returning observable of boolean type.
    return of(this.dataExists);
  }
}
