import { Component, OnInit } from "@angular/core";

@Component({
  selector: "agro-invoices-search",
  templateUrl: "./invoices-search.component.html",
  styleUrls: ["./invoices-search.component.scss"],
})
export class InvoicesSearchComponent {
  searchTerm = {
    concept: "",
    invNumber: "",
  };
  search() {
    console.log(`searching ${this.searchTerm.concept} invoices`);
  }
}
