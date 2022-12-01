import { createAction, props } from "@ngrx/store";

export const setPriceFilter = createAction(
  "[admin] LOAD PRICEFILTER SET",
  props<{ priceFilterList: Array<number> }>()
);
