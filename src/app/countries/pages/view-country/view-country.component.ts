import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';
// Services
import { CountriesService } from '../../services/countries.service';
// Interfaces
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-view-country',
  templateUrl: './view-country.component.html',
  styles: [
  ]
})
export class ViewCountryComponent implements OnInit {

  country!: Country;  // ! tells typescript that you control the situation

  constructor( 
    private activatedRoute: ActivatedRoute,
    private countries_service: CountriesService
    ) { }

  ngOnInit(): void {
    // Get specific country
    // Option I SwitchMap
    this.activatedRoute.params
      .pipe(
        switchMap(({ id }) => this.countries_service.searchSpecificCountry(id)),
        // tap( country => console.log(country) ) // Secondary action
      )
      .subscribe( country => {
        this.country = country;
      });

    // Option II 2 Observables
    // this.activatedRoute.params
    //   .subscribe( ({ id }) => {   // Read params from URL (id)
    //     this.countries_service.searchSpecificCountry(id)
    //       .subscribe( resp => {   // Use params from url for the api request
    //         console.log(resp);
    //       });
    //   });
  }

}
