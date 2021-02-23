import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
// Components
import { CountryComponent } from "./countries/pages/country/country.component";
import { CapitalComponent } from './countries/pages/capital/capital.component';
import { RegionComponent } from './countries/pages/region/region.component';
import { ViewCountryComponent } from './countries/pages/view-country/view-country.component';

const routes: Routes = [
    {
        path: '',
        component: CountryComponent,
        pathMatch: 'full'
    },
    {
        path: 'capital',
        component: CapitalComponent
    },
    {
        path: 'region',
        component: RegionComponent
    },
    {
        path: 'country/:id',
        component: ViewCountryComponent
    },
    {
        path: '**',
        redirectTo: ''
    }
]

@NgModule({
    imports:[
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}