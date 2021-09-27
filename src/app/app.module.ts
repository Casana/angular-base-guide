import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HplContadorComponent } from './components/01-contador/hpl-contador.component';
import { HeroeComponent } from './components/02-heroe/heroe.component';

@NgModule({
  declarations: [
    AppComponent,
    HplContadorComponent,
    HeroeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
