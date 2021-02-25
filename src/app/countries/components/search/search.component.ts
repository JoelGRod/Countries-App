import { Component, Input, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
// Interfaces
import { Country } from '../../interfaces/country.interface';
// Services
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
    `
    li {
      cursor: pointer;
    }
    `
  ]
})
export class SearchComponent implements OnInit {

  term: string = "";
  @Input() endpoint: string = '';

  // Observable (suggestions)
  show_suggestions: boolean = false;
  debouncer: Subject<string> = new Subject();

  get suggested_countries(): Country[] {
    return this.countries_service.suggested_countries;
  }

  // suggestions
  ngOnInit() {
    this.debouncer
      .pipe(debounceTime(300))
      .subscribe(value => {
        this.countries_service.suggestions(value, this.endpoint);
        this.show_suggestions = true;
      });
  }

  constructor(private countries_service: CountriesService) { }

  search() {
    this.show_suggestions = false;
    this.countries_service.search(this.term, this.endpoint);
  }

  // suggestions
  pressedKey() {
    this.debouncer.next(this.term);
  }

}
