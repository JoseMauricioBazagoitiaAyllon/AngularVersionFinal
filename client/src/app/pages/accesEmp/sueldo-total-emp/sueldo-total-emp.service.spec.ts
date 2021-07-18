import { TestBed } from '@angular/core/testing';

import { SueldoTotalEmpService } from './sueldo-total-emp.service';

describe('SueldoTotalEmpService', () => {
  let service: SueldoTotalEmpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SueldoTotalEmpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
