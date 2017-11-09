import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BusReportComponent } from './bus-report/bus-report.component';
import { BusServicesService } from './bus-services.service';
import { DeviationFromTimeTable } from './shared/deviation-from-timetable.pipe';


@NgModule({
  declarations: [
    AppComponent,
    BusReportComponent,
    DeviationFromTimeTable
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [BusServicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
