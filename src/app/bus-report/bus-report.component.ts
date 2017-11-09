import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {Busorganisation} from './../models/busdata-model';
@Component({
  selector: 'busrep-busreport',
  templateUrl: './bus-report.component.html',
  styleUrls: ['./bus-report.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BusReportComponent implements OnInit {

  showTable: boolean = false;
  busServices : Busorganisation[] =[{"organisation":"Sydney Buses","date":"25/09/2015","busData":[{"busId":"42612","routeVariant":"891 2 1","deviationFromTimetable":77},{"busId":"29016","routeVariant":"400 1 1","deviationFromTimetable":340},{"busId":"90467","routeVariant":"393 1 1","deviationFromTimetable":220},{"busId":"88836","routeVariant":"M20 1 0","deviationFromTimetable":-287},{"busId":"79367","routeVariant":"L21 2 1","deviationFromTimetable":347}]},{"organisation":"Westbus","date":"25/09/2015","busData":[{"busId":"94811","routeVariant":"664 2 1","deviationFromTimetable":164},{"busId":"62788","routeVariant":"UNKNOWN","deviationFromTimetable":null},{"busId":"14221","routeVariant":"834 1 1","deviationFromTimetable":423}]}];
  constructor() { }

  ngOnInit() {
  }

}
