import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SueldoTotalEmpComponent } from './sueldo-total-emp.component';

describe('SueldoTotalEmpComponent', () => {
  let component: SueldoTotalEmpComponent;
  let fixture: ComponentFixture<SueldoTotalEmpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SueldoTotalEmpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SueldoTotalEmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
