import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeV1Component } from './time-v1.component';

describe('TimeV1Component', () => {
  let component: TimeV1Component;
  let fixture: ComponentFixture<TimeV1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TimeV1Component]
    });
    fixture = TestBed.createComponent(TimeV1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
