import { Injectable } from '@angular/core';
import { TaxResult } from './tax-result';

@Injectable({
  providedIn: 'root'
})
export class CalculateTaxService {

  public results = [];

  constructor() { }

  private calculateTax(year: number, msrp: number, currentYear: number): TaxResult {
    const baseValuation = msrp * 0.35;

    let valuation = 0;

    if (year === currentYear) {
      valuation = baseValuation * 0.95;
    } else {
      const dYear = currentYear - year;
      const depreciation = 1 - (((dYear - 1) * 0.1) + 0.05);
      valuation = (depreciation > 0.85)
        ? baseValuation * 0.85
        : baseValuation * depreciation;
      valuation = valuation > 16 ? valuation : 16;
    }

    const govtServicesTax = Math.ceil(valuation * 0.04);
    const supplementalGovtTax = Math.ceil(valuation * 0.01);
    const total = 33 + govtServicesTax + supplementalGovtTax;

    return new TaxResult(currentYear, govtServicesTax, supplementalGovtTax, total);
  }

  public calculateTaxForYearRange(year: number, msrp: number) {
    let rangeOfYears = [];
    const now = new Date();

    for (let i = year; i <= now.getFullYear(); i++) {
      rangeOfYears.push(i);
    }

    this.results = rangeOfYears.map(endYear => {
      return this.calculateTax(year, msrp, endYear);
    });
  }
}
