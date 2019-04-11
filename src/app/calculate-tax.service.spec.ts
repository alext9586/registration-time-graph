import { TestBed } from '@angular/core/testing';

import { CalculateTaxService } from './calculate-tax.service';

describe('CalculateTaxService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CalculateTaxService = TestBed.get(CalculateTaxService);
    expect(service).toBeTruthy();
  });
});
