import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MaterielComponent } from './materiel/materiel.component';
import { MaterielListComponent } from './materiel-list/materiel-list.component';

@NgModule({
  declarations: [
    AppComponent,
    MaterielComponent,
    MaterielListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
