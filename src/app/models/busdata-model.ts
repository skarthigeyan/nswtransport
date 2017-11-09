export class Busdata {
    busId: string;
    routeVariant: string;
    deviationFromTimetable: number;    
}

export class Busorganisation {
  organisation: string;
  date: string;
  busData : Busdata[];
}
