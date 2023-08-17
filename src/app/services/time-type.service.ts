import { Injectable } from '@angular/core';

export enum TimeType {
  Hours = "HOURS",
  Minutes = "MINUTES",
  Seconds = "SECONDS"
}

@Injectable({
  providedIn: 'root'
})
export class TimeTypeService {
  getValues(): TimeType[] { return [TimeType.Hours, TimeType.Minutes, TimeType.Seconds]; }
}
