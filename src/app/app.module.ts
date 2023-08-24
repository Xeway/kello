import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { TimeUnitBarComponent } from './clock-v1/components/time-unit-bar/time-unit-bar.component';
import { ClockV1Component } from './clock-v1/clock-v1.component';
import { ClockV2Component } from './clock-v2/clock-v2.component';

import { AppRoutingModule } from './app-routing.module';
import { TimeUnitStickComponent } from './clock-v2/components/time-unit-stick/time-unit-stick.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    TimeUnitBarComponent,
    ClockV2Component,
    ClockV1Component,
    TimeUnitStickComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
