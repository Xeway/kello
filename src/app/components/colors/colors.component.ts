import {Component, inject} from '@angular/core';
import {PaletteService} from "../../services/palette.service";
import {TimeTypeService} from "../../services/time-type.service";

@Component({
  selector: 'app-colors',
  templateUrl: './colors.component.html',
  styleUrls: ['./colors.component.scss']
})
export class ColorsComponent {
  palette: PaletteService = inject(PaletteService);
  timeTypes: TimeTypeService = inject(TimeTypeService);
}
