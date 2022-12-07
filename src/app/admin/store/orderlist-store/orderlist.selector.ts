import { createFeatureSelector, createSelector } from "@ngrx/store";

export const selectOrderList = createFeatureSelector<any>("order");

export const selectFeatureOrderList = createSelector(
  selectOrderList,
  (state) => {
    return state.orders;
  }
);

export const selectFeatureGridList = createSelector(
  selectOrderList,
  (state) => {
    return state.grid;
  }
);
