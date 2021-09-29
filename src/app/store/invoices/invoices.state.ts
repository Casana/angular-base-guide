import { Injectable } from "@angular/core";
import { Action, Selector, State, StateContext } from "@ngxs/store";
import { mergeMap, tap } from "rxjs/operators";
import { InvoicesService } from "../../services/invoices/invoices.service";
import { Invoices } from "./invoices.actions";
import { InvoiceStateModel, InvoiceModel } from './invoices.model';

@State<InvoiceStateModel>({
  name: "invoices",
  defaults: {
    available: false,
    invoicesList: [],
    searchParams: {},
  },
})
@Injectable()
export class InvoicesState {
  constructor(private InvoicesService: InvoicesService) {}

  @Selector()
  static getCurrentList(state: InvoiceStateModel) { return state.invoicesList}

  /** Updates the availability of the search */
  @Action(Invoices.UpdateAvailability)
  updateAvailability(ctx: StateContext<InvoiceStateModel>) {
      debugger
    const state = ctx.getState();
    ctx.setState({
      ...state,
      available: !state.available,
    });
  }

  @Action(Invoices.GetList)
  getList(ctx: StateContext<InvoiceStateModel>) {
    debugger;
    const state = ctx.getState();
    return this.InvoicesService.search().pipe(
      tap((invoicesListResult: InvoiceModel[]) => {
        debugger;
        ctx.patchState({
          invoicesList: [...state.invoicesList, ...invoicesListResult],
        });
      }),
      mergeMap(() => ctx.dispatch(new Invoices.UpdateAvailability()))
    );
  }

  @Action(Invoices.SetNewSearch)
  setNewSearch(
    ctx: StateContext<InvoiceStateModel>,
    action: Invoices.SetNewSearch
  ) {
    debugger;
    const state = ctx.getState();
    ctx.setState({
      ...state,
      searchParams: action.payload,
    });
    //Example of chaining multiple actions syncronously
    debugger;
    return ctx.dispatch(new Invoices.GetList());
  }
}
