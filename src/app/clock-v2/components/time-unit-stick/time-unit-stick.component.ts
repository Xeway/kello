import { AfterViewInit, Component, ElementRef, Input, OnDestroy, ViewChild, inject } from '@angular/core';
import { Subscription } from 'rxjs';
import { CurrentTimesService } from 'src/app/services/current-times.service';
import { PaletteService } from 'src/app/services/palette.service';
import { TimeType } from 'src/app/services/time-type.service';



@Component({
  selector: 'app-time-unit-stick',
  templateUrl: './time-unit-stick.component.html',
  styleUrls: ['./time-unit-stick.component.scss']
})
export class TimeUnitStickComponent implements AfterViewInit, OnDestroy {
  @Input() type!: TimeType;
  @Input() timeBar?: ElementRef;

  @ViewChild('timeStickElement', { read: ElementRef }) timeStick?: ElementRef;

  palette: PaletteService = inject(PaletteService);

  position: number = 0;

  currentTimes: CurrentTimesService = inject(CurrentTimesService);
  subscription!: Subscription;

  // not using ngOnInit because ElementRefs can be undefined and it may cause problems as currentTimes service is loaded before view is rendered
  ngAfterViewInit(): void {
      this.subscription = this.currentTimes.times$.subscribe(time => {
        this.position = this.currentTimes.getPercentage(this.type, this.timeBar?.nativeElement?.clientWidth - this.timeStick?.nativeElement?.offsetWidth);
      });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
