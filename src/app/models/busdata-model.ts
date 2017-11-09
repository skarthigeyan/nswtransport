
export interface IBusorganisation {
  organisation: string;
  date: string;
  busData : IBusdata[];
  notes?: string;
}

export interface IBusdata {
    busId: string;
    routeVariant: string;
    deviationFromTimetable: number;    
}
