import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeneficioEmpComponent } from './beneficio-emp.component';

describe('BeneficioEmpComponent', () => {
  let component: BeneficioEmpComponent;
  let fixture: ComponentFixture<BeneficioEmpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeneficioEmpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BeneficioEmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
