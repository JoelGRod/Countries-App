import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
// Routes
import { AppRoutingModule } from './app-routing.module';
// Components
import { AppComponent } from './app.component';
// Modules
import { CountriesModule } from './countries/countries.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    SharedModule,
    CountriesModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
