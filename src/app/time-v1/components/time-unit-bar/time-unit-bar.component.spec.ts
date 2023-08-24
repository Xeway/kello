import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeUnitBarComponent } from './time-unit-bar.component';

describe('TimeUnitBarComponent', () => {
  let component: TimeUnitBarComponent;
  let fixture: ComponentFixture<TimeUnitBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TimeUnitBarComponent]
    });
    fixture = TestBed.createComponent(TimeUnitBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
