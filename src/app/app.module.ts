import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { environment } from "../environments/environment";
import { NgxsModule } from "@ngxs/store";
import { NgxsReduxDevtoolsPluginModule } from "@ngxs/devtools-plugin";

import { AppComponent } from "./app.component";
import { HeroesModule } from "./components/heroes/heroes.module";
import { InvoicesModule } from "./components/invoices/invoices.module";
import { InvoicesService } from "./services/invoices/invoices.service";
import { InvoicesState } from './store/invoices/invoices.state';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    NgxsModule.forRoot([InvoicesState], {
      developmentMode: !environment.production,
    }),
    NgxsReduxDevtoolsPluginModule.forRoot({
      disabled: environment.production,
    }),
    HeroesModule,
    InvoicesModule,
  ],
  providers: [InvoicesService],
  bootstrap: [AppComponent],
})
export class AppModule {}
