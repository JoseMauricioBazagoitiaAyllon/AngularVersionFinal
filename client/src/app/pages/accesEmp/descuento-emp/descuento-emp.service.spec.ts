import { TestBed } from '@angular/core/testing';

import { DescuentoEmpService } from './descuento-emp.service';

describe('DescuentoEmpService', () => {
  let service: DescuentoEmpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DescuentoEmpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
