import { Component } from '@angular/core';
import {RitListComponent} from '../rit-list-component/rit-list-component.component';
import {CyclistStravaComponentComponent} from '../cyclist-strava-component/cyclist-strava-component.component';

@Component({
  selector: 'app-ritten',
  standalone: true,
  imports: [
    RitListComponent,
    CyclistStravaComponentComponent
  ],
  templateUrl: './ritten.component.html',
  styleUrl: './ritten.component.scss'
})
export class RittenComponent {

}
