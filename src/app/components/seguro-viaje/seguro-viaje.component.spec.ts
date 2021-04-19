import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeguroViajeComponent } from './seguro-viaje.component';

describe('SeguroViajeComponent', () => {
  let component: SeguroViajeComponent;
  let fixture: ComponentFixture<SeguroViajeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeguroViajeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeguroViajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
