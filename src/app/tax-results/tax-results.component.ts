import { Component, OnInit } from '@angular/core';
import { CalculateTaxService } from '../calculate-tax.service';
import { TaxResult } from '../tax-result';

@Component({
  selector: 'app-tax-results',
  templateUrl: './tax-results.component.html',
  styleUrls: ['./tax-results.component.sass']
})
export class TaxResultsComponent implements OnInit {

  get taxResults(): TaxResult[] {
    return this.calculateTaxService.results;
  }

  constructor(private calculateTaxService: CalculateTaxService) { }

  ngOnInit() {
  }

}
