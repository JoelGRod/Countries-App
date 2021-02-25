import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
// Interfaces
import { Country } from '../interfaces/country.interface';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  private _api_base_url: string = 'https://restcountries.eu/rest/v2';

  private _error: boolean = false;
  private _term: string = '';
  private _countries: Country[] = [];
  private _suggested_countries: Country[] = [];

  get error(): boolean {
    return this._error;
  }

  get term(): string {
    return this._term;
  }

  get countries(): Country[] {
    return this._countries;
  }

  get suggested_countries(): Country[] {
    return this._suggested_countries;
  }

  // Shorten reults
  get http_params() {
    return new HttpParams().set('fields', 'flag;name;capital;population;alpha2Code');
  }

  constructor(private http: HttpClient) { }

  search(term: string, endpoint: string): void {
    this.http.get<Country[]>(`${this._api_base_url}/${endpoint}/${term}`, { params: this.http_params })
    .subscribe( countries => {
        this._error = false;
        this._countries = countries;
      }, error => {
        this._error = true;
        this._term = term;
        this._countries = [];
      });
  }

  searchSpecificCountry(id: string): Observable<Country> {
    return this.http.get<Country>(`${this._api_base_url}/alpha/${id}`);
  }

  suggestions(term: string, endpoint: string): void {
    this.http.get<Country[]>(`${this._api_base_url}/${endpoint}/${term}`, { params: this.http_params })
    .subscribe( countries => {
        this._error = false;
        this._suggested_countries = countries.splice(0, 5);
      }, error => {
        this._suggested_countries = [];
      });
  }
}
