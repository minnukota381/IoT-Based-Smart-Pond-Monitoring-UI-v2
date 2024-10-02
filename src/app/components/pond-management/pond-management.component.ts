import { Component, OnInit } from '@angular/core';
import { PondService } from '../../services/pond.service';

@Component({
  selector: 'app-pond-management',
  templateUrl: './pond-management.component.html',
  styleUrls: ['./pond-management.component.css'],
})
export class PondManagementComponent implements OnInit {
  ponds: any[] = [];

  constructor(private pondService: PondService) {}

  ngOnInit() {
    this.loadPonds();
  }

  loadPonds() {
    this.pondService.getPonds().subscribe(
      (data) => {
        this.ponds = data;
      },
      (error) => {
        console.error('Error loading ponds', error);
      }
    );
  }

  // Add methods for create, update, delete ponds...
}
