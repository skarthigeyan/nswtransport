import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { BusReportComponent } from './bus-report/bus-report.component';
import { BusServicesService } from './bus-services.service';


@NgModule({
  declarations: [
    AppComponent,
    BusReportComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [BusServicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
