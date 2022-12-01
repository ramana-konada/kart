import {
  createFeature,
  createFeatureSelector,
  createSelector,
} from "@ngrx/store";

export const selectAdminState = createFeatureSelector<any>("admin");

export const selectPriceFilter = createSelector(selectAdminState, (state) => {
  return state.priceFilter;
});
