import { TestBed } from '@angular/core/testing';

import { BeneficioEmpService } from './beneficio-emp.service';

describe('BeneficioEmpService', () => {
  let service: BeneficioEmpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BeneficioEmpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
