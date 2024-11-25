import { Component } from '@angular/core';
import { RitListComponent } from '../rit-list-component/rit-list.component';
import { CyclistStravaComponent } from '../cyclist-strava-component/cyclist-strava.component';

@Component({
  selector: 'app-ritten',
  standalone: true,
  imports: [
    RitListComponent,
    CyclistStravaComponent
  ],
  templateUrl: './ritten.component.html',
  styleUrl: './ritten.component.scss'
})
export class RittenComponent {

}
