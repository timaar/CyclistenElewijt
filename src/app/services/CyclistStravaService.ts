import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {RitModel} from '../models/rit.model';
import {StravaCyclistModel} from '../models/StravaCyclist.model';

@Injectable({
  providedIn: 'root'
})
export class CyclistStravaService {
  constructor(private http: HttpClient) { }

  getAllCyclisten(): Observable<StravaCyclistModel[]> {
    return this.http.get<StravaCyclistModel[]>('assets/data/strava-profielen.json');
  }
}
