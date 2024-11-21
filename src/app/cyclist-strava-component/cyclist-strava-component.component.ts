import {Component, OnInit} from '@angular/core';
import {StravaCyclistModel} from '../models/StravaCyclist.model';
import {CyclistStravaService} from '../services/CyclistStravaService';
import {SafeUrlPipe} from '../pipes/safe-url.pipe';
import {NgbAccordionModule} from '@ng-bootstrap/ng-bootstrap';
import {CommonModule  } from '@angular/common';

@Component({
  selector: 'app-cyclist-strava-component',
  standalone: true,
  imports: [
    SafeUrlPipe, NgbAccordionModule, CommonModule
  ],
  templateUrl: './cyclist-strava-component.component.html',
  styleUrl: './cyclist-strava-component.component.scss'
})
export class CyclistStravaComponentComponent implements OnInit {
  cyclists: StravaCyclistModel[] = [];

  constructor(private cyclistStravaService: CyclistStravaService) {}

  ngOnInit(): void {
    this.cyclistStravaService.getAllCyclisten().subscribe((data) => {
      this.cyclists = data;
    });
  }
}
