import { TestBed, inject } from '@angular/core/testing';

import { BusServicesService } from './bus-services.service';

describe('BusServicesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BusServicesService]
    });
  });

  it('should be created', inject([BusServicesService], (service: BusServicesService) => {
    expect(service).toBeTruthy();
  }));
});
