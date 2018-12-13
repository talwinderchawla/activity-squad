import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { StoreModule } from '@ngrx/store';
import {  enthusiastsListReducer } from './Store/enthusiastsList.reducer';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot( { enthusiasts: enthusiastsListReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
