import { Component, inject } from '@angular/core';

import { TimeType, TimeTypeService } from '../services/time-type.service';

@Component({
  selector: 'app-time-v1',
  templateUrl: './time-v1.component.html',
  styleUrls: ['./time-v1.component.scss']
})
export class TimeV1Component {
  times: TimeType[] = inject(TimeTypeService).getValues();
}
