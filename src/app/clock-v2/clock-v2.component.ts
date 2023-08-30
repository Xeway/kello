import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  inject,
  OnDestroy,
  Renderer2,
  ViewChild
} from '@angular/core';
import {TimeType, TimeTypeService} from '../services/time-type.service';
import {CurrentTimesService} from '../services/current-times.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-clock-v2',
  templateUrl: './clock-v2.component.html',
  styleUrls: ['./clock-v2.component.scss']
})
export class ClockV2Component implements AfterViewInit, OnDestroy {
  timeTypes: TimeTypeService = inject(TimeTypeService);

  @ViewChild('timeBarElement', { read: ElementRef }) timeBar?: ElementRef;
  @ViewChild('timeTextElement', { read: ElementRef }) timeText?: ElementRef;

  currentTimes: CurrentTimesService = inject(CurrentTimesService);
  subscription!: Subscription;

  unitNumber24: number[];
  unitNumber60: number[];

  constructor(private cd: ChangeDetectorRef, private renderer: Renderer2) {
    this.unitNumber24 = this.timeTypes.getGradation(TimeType.Hours);
    this.unitNumber60 = this.timeTypes.getGradation(TimeType.Seconds);
  }

  ngAfterViewInit(): void {
    this.subscription = this.currentTimes.times$.subscribe(time => {
      const currentDate =
        `${Math.floor(time.hours).toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false })}:`+
        `${Math.floor(time.minutes).toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false })}:`+
        `${Math.floor(time.seconds).toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false })}`;

      this.renderer.setProperty(this.timeText?.nativeElement, 'textContent', currentDate);
    });

    this.cd.detectChanges();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
