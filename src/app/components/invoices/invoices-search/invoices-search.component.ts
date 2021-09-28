import { Component, Input, Output, EventEmitter } from "@angular/core";
import { searchTerm } from "../types/invoices.types";

@Component({
  selector: "agro-invoices-search",
  templateUrl: "./invoices-search.component.html",
  styleUrls: ["./invoices-search.component.scss"],
})


export class InvoicesSearchComponent {
  @Input() searchType: 'simple' | 'complete' = 'simple';
  @Output() onNewSearch: EventEmitter<searchTerm> = new EventEmitter();

  
  searchTerm: searchTerm = {
    concept: "",
    invNumber: "",
  };
  search() {
    console.log(`searching ${this.searchTerm.concept} invoices in mode ${this.searchType}`);
    this.onNewSearch.emit(this.searchTerm);
  }
}
