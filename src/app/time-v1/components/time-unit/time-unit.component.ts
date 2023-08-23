import { PlatformLocation } from '@angular/common';
import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild, inject } from '@angular/core';
import { Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { CurrentTimesService } from 'src/app/services/current-times.service';
import { PaletteService } from 'src/app/services/palette.service';
import { TimeType } from 'src/app/services/time-type.service';

@Component({
  selector: 'app-time-unit',
  templateUrl: './time-unit.component.html',
  styleUrls: ['./time-unit.component.scss']
})
export class TimeUnitComponent implements OnInit, OnDestroy {
  @Input() type!: TimeType;

  palette: PaletteService = inject(PaletteService);

  percentage: number = 0;
  timeText: number = 0;

  currentTimes: CurrentTimesService = inject(CurrentTimesService);
  subscription!: Subscription;

  @ViewChild('timeElement', { read: ElementRef }) timeElement: ElementRef | undefined;

  ngOnInit(): void {
    this.subscription = this.currentTimes.times$.subscribe(time => {
      this.percentage = this.currentTimes.getPercentage(this.type);
      
      this.timeText = Math.floor(this.currentTimes.getTime(this.type));
      /* if (this.type == TimeType.Seconds) {
        this.timeText = Math.floor(time.seconds);
      } else if (this.type == TimeType.Minutes) {
        this.timeText = Math.floor(time.minutes);
      } else if (this.type == TimeType.Hours) {
        this.timeText = Math.floor(time.hours);
      } */
    });
  }

  ngOnDestroy(): void {
      this.subscription.unsubscribe();
  }

  getWidth(): number {
    if (this.type == TimeType.Minutes) return 80;
    if (this.type == TimeType.Seconds) return 60;
    return 100;
  }
}
