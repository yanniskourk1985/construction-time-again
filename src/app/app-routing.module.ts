import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UnitedcalendarComponent } from './unitedcalendar/unitedcalendar.component';
import { SeasonTemplateComponent } from './season-template/season-template.component';

const routes: Routes = [
  { path: 'United Calendar', component: UnitedcalendarComponent },
  { path:'Season Template', component:SeasonTemplateComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
