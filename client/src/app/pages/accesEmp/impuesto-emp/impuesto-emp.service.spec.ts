import { TestBed } from '@angular/core/testing';

import { ImpuestoEmpService } from './impuesto-emp.service';

describe('ImpuestoEmpService', () => {
  let service: ImpuestoEmpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImpuestoEmpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
