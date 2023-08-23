import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { TimeUnitComponent } from './time-v1/components/time-unit/time-unit.component';
import { TimeV1Component } from './time-v1/time-v1.component';
import { TimeV2Component } from './time-v2/time-v2.component';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    TimeUnitComponent,
    TimeV2Component,
    TimeV1Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
