import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { enthusiast } from '../../Store/enthusiast.model';

@Component({
  selector: 'app-enthusiasts-list',
  templateUrl: './enthusiasts-list.component.html',
  styleUrls: ['./enthusiasts-list.component.less']
})
export class EnthusiastsListComponent implements OnInit {
  enthusiasts_list : Array<enthusiast>;
  constructor(private store: Store<{enthusiasts: Array<enthusiast>}>) { 
    store.pipe(select('enthusiasts')).subscribe ((list_data) => {

      this.enthusiasts_list = list_data;
      console.log("Enthu list"+this.enthusiasts_list);
    });

      
  }

  ngOnInit() {
  }

}
