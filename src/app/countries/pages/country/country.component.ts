import { Component } from '@angular/core';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styles: [
  ]
})
export class CountryComponent  {

  public endpoint: string = "name";

  constructor() {}
  
}
