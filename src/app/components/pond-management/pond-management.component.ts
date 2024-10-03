import { Component } from '@angular/core';
import { Pond } from '../../models/pond.model';
import { PondService } from '../../services/pond.service';

@Component({
  selector: 'app-pond-management',
  templateUrl: './pond-management.component.html',
})
export class PondManagementComponent {
  ponds: Pond[] = [];
  newPond: Pond = {
    id: '',
    pondId: '',
    temperature: 0,
    pH: 0,
    rain: 0,
    dissolvedOxygen: 0,
    waterLevel: 0,
  };

  constructor(private pondService: PondService) {}

  addPond() {
    this.pondService.addPond(this.newPond).subscribe((pond) => {
      this.ponds.push(pond);
      this.newPond = {
        id: '',
        pondId: '',
        temperature: 0,
        pH: 0,
        rain: 0,
        dissolvedOxygen: 0,
        waterLevel: 0,
      }; // Reset form
    });
  }

  deletePond(id: string) {
    this.pondService.deletePond(id).subscribe(() => {
      this.ponds = this.ponds.filter((pond) => pond.id !== id);
    });
  }

  // Implement update and other methods as necessary
}
