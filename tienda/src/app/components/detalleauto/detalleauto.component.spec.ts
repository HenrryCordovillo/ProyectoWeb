import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleautoComponent } from './detalleauto.component';

describe('DetalleautoComponent', () => {
  let component: DetalleautoComponent;
  let fixture: ComponentFixture<DetalleautoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleautoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleautoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
