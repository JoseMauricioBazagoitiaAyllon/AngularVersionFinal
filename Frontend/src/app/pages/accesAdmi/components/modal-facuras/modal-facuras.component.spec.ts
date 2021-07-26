import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalFacurasComponent } from './modal-facuras.component';

describe('ModalFacurasComponent', () => {
  let component: ModalFacurasComponent;
  let fixture: ComponentFixture<ModalFacurasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalFacurasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalFacurasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
