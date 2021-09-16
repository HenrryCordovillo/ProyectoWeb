import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateautoComponent } from './createauto.component';

describe('CreateautoComponent', () => {
  let component: CreateautoComponent;
  let fixture: ComponentFixture<CreateautoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateautoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateautoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
