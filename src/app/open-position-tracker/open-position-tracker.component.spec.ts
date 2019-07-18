import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenPositionTrackerComponent } from './open-position-tracker.component';

describe('OpenPositionTrackerComponent, StepperComponent', () => {
  let component: OpenPositionTrackerComponent;
  let fixture: ComponentFixture<OpenPositionTrackerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpenPositionTrackerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenPositionTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
})