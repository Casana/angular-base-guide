import { Component, OnInit } from "@angular/core";
//import { InvoicesService } from "../../../services/invoices/invoices.service";
import { searchTerm } from "../types/invoices.types";
import { Store, Select } from "@ngxs/store";
import { Invoices } from 'src/app/store/invoices/invoices.actions';
import { Observable } from "rxjs";
import { withLatestFrom } from "rxjs/operators";
import { InvoiceModel } from "../../../store/invoices/invoices.model";
import { InvoicesState } from '../../../store/invoices/invoices.state';

@Component({
  selector: "agro-invoices-summary",
  templateUrl: "./invoices-summary.component.html",
  styleUrls: ["./invoices-summary.component.scss"],
})
export class InvoicesSummaryComponent implements OnInit {
  availability$!: Observable<any>;

  @Select(InvoicesState.getCurrentList) invoicesList$!: Observable<any>;

  constructor(private store: Store) {

  }

  ngOnInit(): void {}

  dispatchUpdateAvailability() {
    this.store.dispatch(new Invoices.UpdateAvailability)
    .subscribe(() => {
      console.log('availability updated')
    });;
  }

  dispatchNewSearch(searchTerm: searchTerm) {
    this.store
      .dispatch(new Invoices.SetNewSearch(searchTerm))
      .subscribe(() => {
        console.log(this.invoicesList$)
      });;
  }

  dispatchAddInvoice(name: string) {
    this.store
      .dispatch(new Invoices.Add(name))
      .pipe(withLatestFrom(this.invoicesList$))
      .subscribe(([_, invoicesList]) => {
        // do something with invoices
        console.log(this.store.snapshot());
      });
  }
}
