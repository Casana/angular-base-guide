import { Component, OnInit } from '@angular/core';
import { InvoicesService } from '../../../services/invoices/invoices.service';

@Component({
  selector: 'agro-invoices-summary',
  templateUrl: './invoices-summary.component.html',
  styleUrls: ['./invoices-summary.component.scss']
})
export class InvoicesSummaryComponent implements OnInit {

  constructor(private InvoicesService: InvoicesService) { }

  ngOnInit(): void {
  }

  dispatchNewSearch() {
    this.InvoicesService.search();
  }

}
