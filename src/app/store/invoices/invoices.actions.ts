import { searchTerm } from "../../components/invoices/types/invoices.types";

/**
 * All actions related to invoice´s management.
 */
export namespace Invoices {
  
  /***** COMMANDS *****/
  
  /** Get invoices list from the system */
  export class GetList {
    static readonly type = "[Invoices API] Get Invoices";
  }

  /** Add new invoice */
  export class Add {
    static readonly type = "[Invoices API] Add Invoices";
    constructor(public payload: string) {}
  }

  /** Change availability of the search */
  export class UpdateAvailability {
    static readonly type = "[Invoices API] UpdateAvailability";
  }

  /** Define a new invoice´s search */
  export class SetNewSearch {
    static readonly type = "[Invoices API] SetNewSearch";
    constructor(public payload: searchTerm) {}
  }

  /***** EVENTS *****/

  export class UpdateList {
    static readonly type = "[Invoices API] InvoicesListUpdated";
    constructor(public payload: any[]) {}
  }

}
