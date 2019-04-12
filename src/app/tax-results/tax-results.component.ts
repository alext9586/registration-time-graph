import { Component, OnInit } from '@angular/core';
import { CalculateTaxService } from '../calculate-tax.service';
import { TaxResult } from '../tax-result';

@Component({
  selector: 'app-tax-results',
  templateUrl: './tax-results.component.html',
  styleUrls: ['./tax-results.component.sass']
})
export class TaxResultsComponent implements OnInit {

  private taxResults: TaxResult[] = [];

  constructor(private calculateTaxService: CalculateTaxService) { }

  ngOnInit() {
    this.calculateTaxService.getResultObservable().subscribe(data => {
      this.taxResults = data;
    });
  }

}
