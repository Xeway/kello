import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  inject,
  NgZone,
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
  times: TimeType[] = inject(TimeTypeService).getValues();

  @ViewChild('timeBarElement', { read: ElementRef }) timeBar?: ElementRef;
  @ViewChild('timeTextElement', { read: ElementRef }) timeText?: ElementRef;

  currentTimes: CurrentTimesService = inject(CurrentTimesService);
  subscription!: Subscription;

  constructor(private cd: ChangeDetectorRef, private zone: NgZone, private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    this.zone.runOutsideAngular(() => {
      this.subscription = this.currentTimes.times$.subscribe(time => {
        const currentDate =
          `${Math.floor(time.hours).toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false })}:`+
          `${Math.floor(time.minutes).toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false })}:`+
          `${Math.floor(time.seconds).toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false })}`;

        this.renderer.setProperty(this.timeText?.nativeElement, 'textContent', currentDate);
      });
    });

    this.cd.detectChanges();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
