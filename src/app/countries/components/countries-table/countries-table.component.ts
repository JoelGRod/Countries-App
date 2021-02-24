import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-countries-table',
  templateUrl: './countries-table.component.html',
  styles: [
  ]
})
export class CountriesTableComponent {

  get countries(): Country[] {
    return this.countries_service.countries;
  }

  constructor( private countries_service: CountriesService ) {}

}
