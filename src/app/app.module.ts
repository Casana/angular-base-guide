import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeroesModule } from './components/heroes/heroes.module';
import { InvoicesModule } from './components/invoices/invoices.module';
import { InvoicesService } from './services/invoices/invoices.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HeroesModule,
    InvoicesModule
  ],
  providers: [InvoicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
