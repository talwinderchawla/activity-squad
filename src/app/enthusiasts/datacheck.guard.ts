import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Store, select } from "@ngrx/store";
import { enthusiast } from '../Store/enthusiast.model';


@Injectable({
  providedIn: 'root'
})
export class DatacheckGuard implements CanActivate {
  private dataExists: boolean = false;

  constructor(private store: Store<{ enthusiasts: Array<enthusiast> }>) {}
  
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> {
      console.log('In route guard to check for data presence');
      this.store.pipe(select("enthusiasts")).subscribe(list_data => {
        this.dataExists = (list_data.length > 0);
      });
      
      return of(this.dataExists);
    }
}
