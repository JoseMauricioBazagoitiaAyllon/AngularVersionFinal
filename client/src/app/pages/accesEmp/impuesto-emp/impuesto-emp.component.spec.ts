import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImpuestoEmpComponent } from './impuesto-emp.component';

describe('ImpuestoEmpComponent', () => {
  let component: ImpuestoEmpComponent;
  let fixture: ComponentFixture<ImpuestoEmpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImpuestoEmpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImpuestoEmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
