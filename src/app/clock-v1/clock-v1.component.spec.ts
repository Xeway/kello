import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClockV1Component } from './clock-v1.component';

describe('ClockV1Component', () => {
  let component: ClockV1Component;
  let fixture: ComponentFixture<ClockV1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClockV1Component]
    });
    fixture = TestBed.createComponent(ClockV1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
