import { Component, inject } from '@angular/core';

import { TimeType, TimeTypeService } from '../services/time-type.service';

@Component({
  selector: 'app-clock-v1',
  templateUrl: './clock-v1.component.html',
  styleUrls: ['./clock-v1.component.scss']
})
export class ClockV1Component {
  times: TimeType[] = inject(TimeTypeService).getValues();
}
