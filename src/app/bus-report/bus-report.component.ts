import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import {IBusorganisation} from './../models/busdata-model';
import {BusServicesService} from './../bus-services.service';

@Component({
  selector: 'busrep-busreport',
  templateUrl: './bus-report.component.html',
  styleUrls: ['./bus-report.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BusReportComponent implements OnInit {

  
  busServices : IBusorganisation[];
  constructor(private _busService: BusServicesService) {
  }

  ngOnInit() {
    this.busServices = this._busService.getBusServicesData();
  }

  saveNotes(notes){
    console.log(notes);
    //this.busServices.find(x => x.organisation === org).notes.push(notes);
  }

}
