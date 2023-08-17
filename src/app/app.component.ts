import { Component, inject } from '@angular/core';
import { TimeTypeService } from './services/time-type.service';
import { TimeType } from './services/time-type.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  times: TimeType[] = inject(TimeTypeService).getValues();
}
