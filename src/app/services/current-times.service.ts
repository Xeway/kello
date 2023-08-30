import {Injectable, NgZone} from '@angular/core';
import { TimeType } from './time-type.service';
import { BehaviorSubject, Observable, of } from 'rxjs';

interface Times {
  seconds: number;
  minutes: number;
  hours: number;
}

@Injectable({
  providedIn: 'root'
})
export class CurrentTimesService {
  timesSubject: BehaviorSubject<Times>;
  times$: Observable<Times>;

  constructor(private zone: NgZone) {
    this.timesSubject = new BehaviorSubject<Times>({seconds: 0, minutes: 0, hours: 0});
    this.times$ = this.timesSubject.asObservable();

    this.zone.runOutsideAngular(() => {
      this.#updateTimes();
      setInterval(() => {
        this.#updateTimes()
      }, 1);
    });
  }

  #updateTimes() {
    const date = new Date();

    const seconds = date.getSeconds() + date.getMilliseconds()/1000;
    const minutes = date.getMinutes() + seconds/60;
    const hours = date.getHours() + minutes/60;

    this.timesSubject.next({ seconds: seconds, minutes: minutes, hours: hours });
  }

  getPercentage(type: TimeType, scaleTo?: number): number {
    let curTime: number = 0;
    let timeNumber: number = 0;

    if (type == TimeType.Seconds) {
      curTime = this.timesSubject.getValue().seconds;
      timeNumber = 60;
    } else if (type == TimeType.Minutes) {
      curTime = this.timesSubject.getValue().minutes;
      timeNumber = 60;
    } else if (type == TimeType.Hours) {
      curTime = this.timesSubject.getValue().hours;
      timeNumber = 24;
    }

    if (typeof scaleTo === 'undefined') scaleTo = 100;

    return scaleTo*curTime/timeNumber;
  }

  getTime(type: TimeType): number {
    let result: number = 0;

    if (type == TimeType.Seconds) {
      result = this.timesSubject.getValue().seconds;
    } else if (type == TimeType.Minutes) {
      result = this.timesSubject.getValue().minutes;
    } else if (type == TimeType.Hours) {
      result = this.timesSubject.getValue().hours;
    }

    return result;
  }
}
