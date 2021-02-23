import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CapitalComponent } from './pages/capital/capital.component';
import { CountryComponent } from './pages/country/country.component';
import { RegionComponent } from './pages/region/region.component';
import { ViewCountryComponent } from './pages/view-country/view-country.component';



@NgModule({
  declarations: [
    CapitalComponent,
    CountryComponent,
    RegionComponent,
    ViewCountryComponent
  ],
  exports: [
    CapitalComponent,
    CountryComponent,
    RegionComponent,
    ViewCountryComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CountriesModule { }
