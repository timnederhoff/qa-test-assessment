import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutesModule } from './app.routes';

import { AppComponent } from './app.component';
import { SearchFormComponent } from './components/search-form/search-form.component';
import { CharacterComponent } from './components/character/character.component';
import {ApiService} from './services/api.service';
import { PlanetComponent } from './components/planet/planet.component';


@NgModule({
  declarations: [
    AppComponent,
    SearchFormComponent,
    CharacterComponent,
    PlanetComponent
  ],
  imports: [
    AppRoutesModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
