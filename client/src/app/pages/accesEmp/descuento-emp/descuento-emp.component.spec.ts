import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescuentoEmpComponent } from './descuento-emp.component';

describe('DescuentoEmpComponent', () => {
  let component: DescuentoEmpComponent;
  let fixture: ComponentFixture<DescuentoEmpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DescuentoEmpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DescuentoEmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
