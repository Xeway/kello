import { PlatformLocation } from '@angular/common';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild, inject } from '@angular/core';
import { Input } from '@angular/core';
import { PaletteService } from 'src/app/services/palette.service';
import { TimeType } from 'src/app/services/time-type.service';

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.scss']
})
export class TimeComponent implements AfterViewInit {
  @Input() type!: TimeType;

  palette: PaletteService = inject(PaletteService);

  @ViewChild('timeElement', { read: ElementRef }) timeElement: ElementRef | undefined;

  ngAfterViewInit(): void {
      if (this.type == TimeType.Hours) {
        console.log(this.timeElement?.nativeElement);
      }
  }

  getWidth(): number {
    if (this.type == TimeType.Minutes) return 80;
    if (this.type == TimeType.Seconds) return 60;
    return 100;
  }
}
