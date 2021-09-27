import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'agro-invoice-detail',
  templateUrl: './invoice-detail.component.html',
  styleUrls: ['./invoice-detail.component.scss']
})
export class InvoiceDetailComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.getInvoice();
  }

  getInvoice () {
    console.log('This is the invoice')
  }

}
