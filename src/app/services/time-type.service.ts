import { Injectable } from '@angular/core';

export enum TimeType {
  Hours = "Hours",
  Minutes = "Minutes",
  Seconds = "Seconds"
}

@Injectable({
  providedIn: 'root'
})
export class TimeTypeService {
  private types: TimeType[] = [TimeType.Hours, TimeType.Minutes, TimeType.Seconds];
  private unitNumbers: Map<TimeType, number> = new Map<TimeType, number>();

  constructor() {
    this.unitNumbers.set(TimeType.Hours, 24);
    this.unitNumbers.set(TimeType.Minutes, 60);
    this.unitNumbers.set(TimeType.Seconds, 60);
  }

  getValues(): TimeType[] { return this.types; }

  getUnitNumber(type: TimeType): number {
    return <number>this.unitNumbers.get(type);
  }

  getGradation(type: TimeType): number[] {
    return [...Array(this.getUnitNumber(type)+1).keys()];
  }
}
