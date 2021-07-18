import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActividadEmpComponent } from './actividad-emp.component';

describe('ActividadEmpComponent', () => {
  let component: ActividadEmpComponent;
  let fixture: ComponentFixture<ActividadEmpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActividadEmpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActividadEmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
