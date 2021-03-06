import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { UnitedcalendarComponent } from './unitedcalendar/unitedcalendar.component';
import { AppRoutingModule } from './/app-routing.module';
import { SeasonDropdownComponent } from './season-dropdown/season-dropdown.component';
import { SeasonTemplateComponent } from './season-template/season-template.component';


@NgModule({
  declarations: [
    AppComponent,
    UnitedcalendarComponent,
    SeasonDropdownComponent,
    SeasonTemplateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
