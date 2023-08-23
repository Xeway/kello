import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TimeV1Component } from './time-v1/time-v1.component';
import { TimeV2Component } from './time-v2/time-v2.component';

const routes: Routes = [
  { path: 'v1', component: TimeV1Component },
  { path: 'v2', component: TimeV2Component },
  { path: '', redirectTo: '/v1', pathMatch: 'full' },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
