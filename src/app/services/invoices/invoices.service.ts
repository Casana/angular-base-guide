import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class InvoicesService {
  private _invoicesList: any[] = [
    { name: "Riegos", date: "", number: 1 },
    { name: "Riegos", date: "", number: 2 },
  ];

  constructor() {
    console.log("Hello from invoices service");
  }

  search(): any[] {
    console.log("Getting invoices from a singleton service");
    return this._invoicesList;
  }
}
