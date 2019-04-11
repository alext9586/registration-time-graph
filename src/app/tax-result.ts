export class TaxResult {
  constructor(
    public year: number,
    public govtServicesTax: number,
    public supplemetalGovtTax: number,
    public total: number) { }
}