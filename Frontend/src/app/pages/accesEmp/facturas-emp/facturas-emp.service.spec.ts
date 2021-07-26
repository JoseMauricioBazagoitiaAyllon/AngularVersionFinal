import { TestBed } from '@angular/core/testing';

import { FacturasEmpService } from './facturas-emp.service';

describe('FacturasEmpService', () => {
  let service: FacturasEmpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FacturasEmpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
