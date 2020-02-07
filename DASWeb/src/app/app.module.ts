import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DASTesterComponent } from './components/dastester/dastester.component';
import { DASAppointmentLogComponent } from './components/dasappointment-log/dasappointment-log.component';
import { DASAppointmentOpLogItemComponent } from './components/dasappointment-op-log-item/dasappointment-op-log-item.component';
import { TabModule } from 'angular-tabs-component';
import {DropdownModule} from 'angular-dropdown-component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';

@NgModule({
  declarations: [
    AppComponent,
    DASTesterComponent,
    DASAppointmentLogComponent,
    DASAppointmentOpLogItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TabModule,
    DropdownModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
