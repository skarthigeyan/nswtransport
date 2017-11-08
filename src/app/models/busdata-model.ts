export class Busdata {
    busId: string;
    routeVariant: string;
    deviationFromTimeTable: number;

    public constructor() {
        this.busId = '';
        this.routeVariant = '';
        this.deviationFromTimeTable = null;
  }
}

export class Busorganisation {
  organisation: string;
  date: string;
  busdata : Busdata[];

  public constructor() {
    this.organisation = '';
    this.date = '';
    this.busdata = new Array<Busdata>();
  }
}
