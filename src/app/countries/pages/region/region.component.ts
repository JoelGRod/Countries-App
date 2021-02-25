import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styles: [
    `
    button {
      margin-right: 5px
    }
    `
  ]
})
export class RegionComponent {

  public endpoint: string = "region";
  public regions: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  public active_region: string = '';

  constructor(private countries_service: CountriesService) { }

  getCssClass( region: string ): string {
    return (region === this.active_region)? 'btn btn-primary' : 'btn btn-outline-primary';
  }

  activate_region( region: string ): void {
    this.active_region = region;
    this.countries_service.search(region, this.endpoint);
  }

}
