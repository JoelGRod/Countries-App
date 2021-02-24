import { Component, Input, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
// Services
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent implements OnInit {

  term: string = "";
  @Input() endpoint: string = '';

  // Observable (suggestions)
  debouncer: Subject<string> = new Subject();

  // suggestions
  ngOnInit() {
    this.debouncer
      .pipe(debounceTime(300))
      .subscribe(value => {
        this.countries_service.suggestions(value, this.endpoint);
      });
  }

  constructor(private countries_service: CountriesService) { }

  search() {
    this.countries_service.search(this.term, this.endpoint);
  }

  // suggestions
  pressedKey() {
    this.debouncer.next(this.term);
  }

}
