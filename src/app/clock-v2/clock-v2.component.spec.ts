import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClockV2Component } from './clock-v2.component';

describe('ClockV2Component', () => {
  let component: ClockV2Component;
  let fixture: ComponentFixture<ClockV2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClockV2Component]
    });
    fixture = TestBed.createComponent(ClockV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
