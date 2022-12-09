import { createReducer, on } from "@ngrx/store";
import { setPriceFilter } from "./admin.action";
import { adminInitialState, IAdminState } from "./admin.state";

export const adminReducer = createReducer(
  adminInitialState,

  on(setPriceFilter, (state, { priceFilterList }): IAdminState => {
    return {
      ...state,
      loading: false,
      priceFilter: priceFilterList,
    };
  })
);
