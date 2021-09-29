import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { InvoiceModel } from "src/app/store/invoices/invoices.model";
import INVOICES from "./invoices.mock.json";

@Injectable({
  providedIn: "root",
})
export class InvoicesService {
  constructor() {}

  search() {
    const Invoices: Observable<InvoiceModel[]> = new Observable((observer) => {
      if (INVOICES.length) {
        observer.next(INVOICES);
      } else {
        observer.error("No invoices. Empty result");
      }
    });
    return Invoices;
  }
}
