import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { IonRangeSliderModule } from "ng2-ion-range-slider";

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    IonRangeSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
