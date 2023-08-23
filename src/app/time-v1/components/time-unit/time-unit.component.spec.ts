import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeUnitComponent } from './time-unit.component';

describe('TimeUnitComponent', () => {
  let component: TimeUnitComponent;
  let fixture: ComponentFixture<TimeUnitComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TimeUnitComponent]
    });
    fixture = TestBed.createComponent(TimeUnitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
