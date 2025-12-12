import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StravaCyclistModel } from '../models/StravaCyclist.model';

@Injectable({
  providedIn: 'root'
})
export class CyclistStravaService {
  constructor(private readonly http: HttpClient) { }

  getAllCyclisten(): Observable<StravaCyclistModel[]> {
    return this.http.get<StravaCyclistModel[]>('assets/data/strava-profielen.json');
  }
}
