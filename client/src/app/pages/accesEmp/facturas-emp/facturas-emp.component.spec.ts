import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacturasEmpComponent } from './facturas-emp.component';

describe('FacturasEmpComponent', () => {
  let component: FacturasEmpComponent;
  let fixture: ComponentFixture<FacturasEmpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacturasEmpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FacturasEmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
