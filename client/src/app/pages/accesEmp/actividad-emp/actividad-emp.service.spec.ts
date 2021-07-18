import { TestBed } from '@angular/core/testing';

import { ActividadEmpService } from './actividad-emp.service';

describe('ActividadEmpService', () => {
  let service: ActividadEmpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActividadEmpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
