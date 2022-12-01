import { createFeatureSelector, createSelector } from "@ngrx/store";
import { IKartState } from "../reducers/kart-bundle.reducer";
import { IHomeState } from "../states/home.state";

export const selectKartFeature = createFeatureSelector<IKartState>("kart");

export const selectHomeFeature = createSelector(selectKartFeature, (state) => {
  return state.home;
});

export const getMenuState = createSelector(selectHomeFeature, (state) => {
  return state.menus;
});

export const getCategoriesState = createSelector(selectHomeFeature, (state) => {
  return state.category;
});

export const getLoadingState = createSelector(selectHomeFeature, (state) => {
  return state.loading;
});
