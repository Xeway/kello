import {
  AfterViewInit,
  Component,
  ElementRef,
  inject,
  Input,
  OnDestroy,
  Renderer2,
  ViewChild
} from '@angular/core';
import {Subscription} from 'rxjs';
import {CurrentTimesService} from 'src/app/services/current-times.service';
import {PaletteService} from 'src/app/services/palette.service';
import {TimeType, TimeTypeService} from 'src/app/services/time-type.service';

@Component({
  selector: 'app-time-unit-bar',
  templateUrl: './time-unit-bar.component.html',
  styleUrls: ['./time-unit-bar.component.scss']
})
export class TimeUnitBarComponent implements AfterViewInit, OnDestroy {
  @Input() type!: TimeType;
  timeTypes: TimeTypeService = inject(TimeTypeService);

  palette: PaletteService = inject(PaletteService);

  currentTimes: CurrentTimesService = inject(CurrentTimesService);
  subscription!: Subscription;

  @ViewChild('timeBarElement', { read: ElementRef }) timeBar?: ElementRef;
  @ViewChild('timeTextElement', { read: ElementRef }) timeText?: ElementRef;

  constructor(private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    this.subscription = this.currentTimes.times$.subscribe(time => {
      this.renderer.setStyle(this.timeBar?.nativeElement, 'width', this.currentTimes.getPercentage(this.type)+'%');

      let currentTime = 0;
      if (this.type == TimeType.Seconds) {
        currentTime = time.seconds;
      } else if (this.type == TimeType.Minutes) {
        currentTime = time.minutes;
      } else if (this.type == TimeType.Hours) {
        currentTime = time.hours;
      }

      this.renderer.setProperty(this.timeText?.nativeElement, 'textContent', Math.floor(currentTime));
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

  protected readonly TimeType = TimeType;
}
