import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { VehicleFormComponent } from './vehicle-form/vehicle-form.component';
import { TaxResultsComponent } from './tax-results/tax-results.component';
import { TaxResultChartComponent } from './tax-result-chart/tax-result-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    VehicleFormComponent,
    TaxResultsComponent,
    TaxResultChartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
