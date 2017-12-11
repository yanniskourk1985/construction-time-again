import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UnitedcalendarComponent } from './unitedcalendar/unitedcalendar.component';

const routes: Routes = [
  { path: 'United Calendar', component: UnitedcalendarComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
