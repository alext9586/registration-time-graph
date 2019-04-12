import { Component } from '@angular/core';
import { CalculateTaxService } from './calculate-tax.service';
import { TaxResult } from './tax-result';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'time-graph';

  get taxResults(): TaxResult[] {
    return this.calculateTaxService.results;
  }

  constructor(private calculateTaxService: CalculateTaxService) { }
}
