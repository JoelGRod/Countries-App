import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-search-error',
  templateUrl: './search-error.component.html',
  styles: [
  ]
})
export class SearchErrorComponent {

  get error(): boolean {
    return this.countries_service.error;
  }

  get searchTerm(): string {
    return this.countries_service.term;
  }

  constructor(private countries_service: CountriesService) { }

}
