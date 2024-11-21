import { Component, OnInit, Input } from '@angular/core';
import { RitModel } from '../models/rit.model';
import { RitService } from '../services/RitService';
import { NgbPagination } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule, DatePipe } from '@angular/common';

@Component({
  selector: 'app-rit-list-component',
  standalone: true,
  imports: [
    NgbPagination,
    DatePipe,
    CommonModule
  ],
  templateUrl: './rit-list-component.component.html',
  styleUrl: './rit-list-component.component.scss'
})
export class RitListComponent implements OnInit {
  @Input() useMTB: boolean = false;  // Default to false (Koersfiets data)
  @Input() title: string = '';  // Input for dynamic title
  ritten: RitModel[] = [];
  paginatedRitten: RitModel[] = [];
  page = 1; // Current page
  pageSize = 4; // Items per page

  constructor(private ritService: RitService) {}

  ngOnInit(): void {
    // Choose service method based on `useMTB` input
    if (this.useMTB) {
      this.ritService.getAllMountainbike().subscribe((data) => {
        this.ritten = data.map((rit) => new RitModel(rit)); // Map JSON to `RitModel`
        this.updatePagination();
      });
    } else {
      this.ritService.getAllKoersfiets().subscribe((data) => {
        this.ritten = data.map((rit) => new RitModel(rit)); // Map JSON to `RitModel`
        this.updatePagination();
      });
    }
  }

  updatePagination(): void {
    const startIndex = (this.page - 1) * this.pageSize;
    this.paginatedRitten = this.ritten.slice(startIndex, startIndex + this.pageSize);
  }
}
