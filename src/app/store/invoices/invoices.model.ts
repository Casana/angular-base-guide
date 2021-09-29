import { searchTerm } from "src/app/components/invoices/types/invoices.types";

export interface InvoiceStateModel {
  available: boolean;
  invoicesList: InvoiceModel[];
  searchParams: searchTerm | {};
}

export interface InvoiceModel {
  name: string;
  date: string;
  number: number;
}
