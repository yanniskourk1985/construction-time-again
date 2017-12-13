import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeasonTemplateComponent } from './season-template.component';

describe('SeasonTemplateComponent', () => {
  let component: SeasonTemplateComponent;
  let fixture: ComponentFixture<SeasonTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeasonTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeasonTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
