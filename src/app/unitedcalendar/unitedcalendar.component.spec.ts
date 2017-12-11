import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitedcalendarComponent } from './unitedcalendar.component';

describe('UnitedcalendarComponent', () => {
  let component: UnitedcalendarComponent;
  let fixture: ComponentFixture<UnitedcalendarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnitedcalendarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnitedcalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
