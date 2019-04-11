import { Component, OnInit, Input } from '@angular/core';

import { CalculateTaxService } from '../calculate-tax.service';

@Component({
  selector: 'app-vehicle-form',
  templateUrl: './vehicle-form.component.html',
  styleUrls: ['./vehicle-form.component.sass']
})
export class VehicleFormComponent implements OnInit {

  @Input() msrp: string;
  @Input() year: string;

  constructor(private calculateTaxService: CalculateTaxService) { }

  ngOnInit() {
  }

  calculate() {
    let parsedYear = parseInt(this.year);
    let parsedMsrp = parseInt(this.msrp);

    this.calculateTaxService.calculateTaxForYearRange(parsedYear, parsedMsrp);
  }
}
