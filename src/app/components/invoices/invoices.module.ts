import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InvoiceDetailComponent } from './invoice-detail/invoice-detail.component';
import { InvoicesSummaryComponent } from './invoices-summary/invoices-summary.component';
import { InvoicesSearchComponent } from './invoices-search/invoices-search.component';

@NgModule({
    declarations: [
    InvoiceDetailComponent,
    InvoicesSummaryComponent,
    InvoicesSearchComponent
  ],
    imports: [ CommonModule, FormsModule ],
    exports: [InvoiceDetailComponent, InvoicesSummaryComponent],
    providers: [],
})
export class InvoicesModule {}