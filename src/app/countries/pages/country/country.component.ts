import { Component } from '@angular/core';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styles: [
  ]
})
export class CountryComponent  {

  term: string = ""
  
  search() {
    console.log(this.term);
  }

}
