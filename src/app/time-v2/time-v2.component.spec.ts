import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeV2Component } from './time-v2.component';

describe('TimeV2Component', () => {
  let component: TimeV2Component;
  let fixture: ComponentFixture<TimeV2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TimeV2Component]
    });
    fixture = TestBed.createComponent(TimeV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
