import { Component, ElementRef, OnDestroy, OnInit, ViewChild, inject } from '@angular/core';
import { TimeType, TimeTypeService } from '../services/time-type.service';
import { CurrentTimesService } from '../services/current-times.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-clock-v2',
  templateUrl: './clock-v2.component.html',
  styleUrls: ['./clock-v2.component.scss']
})
export class ClockV2Component implements OnInit, OnDestroy {
  times: TimeType[] = inject(TimeTypeService).getValues();

  @ViewChild('timeBarElement', { read: ElementRef }) timeBar?: ElementRef;

  timeText: string = '';

  currentTimes: CurrentTimesService = inject(CurrentTimesService);
  subscription!: Subscription;

  ngOnInit(): void {
    this.subscription = this.currentTimes.times$.subscribe(time => {
      this.timeText = 
      `${Math.floor(time.hours).toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false })}:`+
      `${Math.floor(time.minutes).toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false })}:`+
      `${Math.floor(time.seconds).toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false })}`;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
