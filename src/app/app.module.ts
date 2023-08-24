import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { TimeUnitBarComponent } from './time-v1/components/time-unit-bar/time-unit-bar.component';
import { TimeV1Component } from './time-v1/time-v1.component';
import { TimeV2Component } from './time-v2/time-v2.component';

import { AppRoutingModule } from './app-routing.module';
import { TimeUnitStickComponent } from './time-v2/components/time-unit-stick/time-unit-stick.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    TimeUnitBarComponent,
    TimeV2Component,
    TimeV1Component,
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
