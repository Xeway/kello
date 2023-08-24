import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeUnitStickComponent } from '../../../time-v2/components/time-unit-stick/time-unit-stick.component';

describe('TimeUnitStickComponent', () => {
  let component: TimeUnitStickComponent;
  let fixture: ComponentFixture<TimeUnitStickComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TimeUnitStickComponent]
    });
    fixture = TestBed.createComponent(TimeUnitStickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
