import { Injectable } from '@angular/core';
import { TaxResult } from './tax-result';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CalculateTaxService {
  private resultSubject: Subject<any> = new Subject<TaxResult[]>();

  public results: TaxResult[] = [];

  constructor() { }

  public getResultObservable(): Observable<TaxResult[]> {
    return this.resultSubject.asObservable();
  }

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

  public calculateTaxForYearRange(year: number, msrp: number): void {
    let rangeOfYears = [];
    const now = new Date();

    const finalYear = Math.max(year + 9, now.getFullYear());
    for (let i = year; i <= finalYear; i++) {
      rangeOfYears.push(i);
    }

    this.results = rangeOfYears.map(endYear => {
      return this.calculateTax(year, msrp, endYear);
    });

    this.resultSubject.next(this.results);
  }
}
