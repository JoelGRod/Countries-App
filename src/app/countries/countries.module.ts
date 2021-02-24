import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
//Components
import { CapitalComponent } from './pages/capital/capital.component';
import { CountryComponent } from './pages/country/country.component';
import { RegionComponent } from './pages/region/region.component';
import { ViewCountryComponent } from './pages/view-country/view-country.component';
import { SearchComponent } from './components/search/search.component';
import { CountriesTableComponent } from './components/countries-table/countries-table.component';
import { SearchErrorComponent } from './components/search-error/search-error.component';



@NgModule({
  declarations: [
    CapitalComponent,
    CountryComponent,
    RegionComponent,
    ViewCountryComponent,
    SearchComponent,
    CountriesTableComponent,
    SearchErrorComponent
  ],
  exports: [
    CapitalComponent,
    CountryComponent,
    RegionComponent,
    ViewCountryComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ]
})
export class CountriesModule { }
