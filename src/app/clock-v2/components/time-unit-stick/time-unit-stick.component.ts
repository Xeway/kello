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
import {TimeType} from 'src/app/services/time-type.service';


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

  currentTimes: CurrentTimesService = inject(CurrentTimesService);
  subscription!: Subscription;

  constructor(private renderer: Renderer2) {}

  // not using ngOnInit because ElementRefs can be undefined and it may cause problems as currentTimes service is loaded before view is rendered
  ngAfterViewInit(): void {
    this.subscription = this.currentTimes.times$.subscribe(time => {
      const position = this.currentTimes.getPercentage(this.type, this.timeBar?.nativeElement?.clientWidth - this.timeStick?.nativeElement?.offsetWidth);

      this.renderer.setStyle(this.timeStick?.nativeElement, 'left', position+'px');
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
