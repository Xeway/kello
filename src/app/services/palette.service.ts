import { Injectable } from '@angular/core';
import { TimeType } from './time-type.service';
import { Time } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class PaletteService {
  palette: Map<TimeType, string> = new Map<TimeType, string>;

  constructor() {
    this.palette.set(TimeType.Hours, '#1D3557');
    this.palette.set(TimeType.Minutes, '#457B9D');
    this.palette.set(TimeType.Seconds, '#A8DADC');
  }

  getValue() {
    return this.palette;
  }

  get(type: TimeType): string | undefined {
    return this.palette.get(type);
  }
}
