import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalFacComponent } from './modal-fac.component';

describe('ModalFacComponent', () => {
  let component: ModalFacComponent;
  let fixture: ComponentFixture<ModalFacComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalFacComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalFacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
