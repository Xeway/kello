import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClockV1Component } from './clock-v1/clock-v1.component';
import { ClockV2Component } from './clock-v2/clock-v2.component';

const routes: Routes = [
  { path: 'v1', component: ClockV1Component },
  { path: 'v2', component: ClockV2Component },
  { path: '', redirectTo: '/v1', pathMatch: 'full' },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
