import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RitModel } from '../models/rit.model';

@Injectable({
  providedIn: 'root'
})
export class RitService {
  constructor(private http: HttpClient) { }

  getAllKoersfiets(): Observable<RitModel[]> {
    return this.http.get<RitModel[]>('assets/data/ritten-koersfiets-gpx.json');
  }

  getAllMountainbike(): Observable<RitModel[]> {
    return this.http.get<RitModel[]>('assets/data/ritten-mountainbike-gpx.json');
  }
}
