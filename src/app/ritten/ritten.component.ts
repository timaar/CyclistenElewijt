import { Component } from '@angular/core';
import {RitListComponent} from '../rit-list-component/rit-list-component.component';

@Component({
  selector: 'app-ritten',
  standalone: true,
  imports: [
    RitListComponent
  ],
  templateUrl: './ritten.component.html',
  styleUrl: './ritten.component.scss'
})
export class RittenComponent {

}
