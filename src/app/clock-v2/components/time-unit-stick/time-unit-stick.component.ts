import { Component, ElementRef, Input, OnDestroy, OnInit, ViewChild, inject } from '@angular/core';
import { Subscription } from 'rxjs';
import { CurrentTimesService } from 'src/app/services/current-times.service';
import { PaletteService } from 'src/app/services/palette.service';
import { TimeType } from 'src/app/services/time-type.service';



@Component({
  selector: 'app-time-unit-stick',
  templateUrl: './time-unit-stick.component.html',
  styleUrls: ['./time-unit-stick.component.scss']
})
export class TimeUnitStickComponent implements OnInit, OnDestroy {
  @Input() type!: TimeType;
  @Input() timeBar?: ElementRef;

  @ViewChild('timeStickElement', { read: ElementRef }) timeStick?: ElementRef;

  palette: PaletteService = inject(PaletteService);

  position: number = 0;

  currentTimes: CurrentTimesService = inject(CurrentTimesService);
  subscription!: Subscription;

  ngOnInit(): void {
      this.subscription = this.currentTimes.times$.subscribe(time => {
        this.position = this.currentTimes.getPercentage(this.type, this.timeBar?.nativeElement?.clientWidth - this.timeStick?.nativeElement?.offsetWidth);
      });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
