import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxResultChartComponent } from './tax-result-chart.component';

describe('TaxResultChartComponent', () => {
  let component: TaxResultChartComponent;
  let fixture: ComponentFixture<TaxResultChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaxResultChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaxResultChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
