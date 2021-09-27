import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HplContadorComponent } from './components/heroes/01-contador/hpl-contador.component';
import { HeroeComponent } from './components/heroes/02-heroe/heroe.component';
import { HeroesModule } from './components/heroes/heroes.module';
import { InvoicesModule } from './components/invoices/invoices.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HeroesModule,
    InvoicesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
