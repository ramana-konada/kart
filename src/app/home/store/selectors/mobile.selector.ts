import { createFeatureSelector, createSelector } from "@ngrx/store";
import { IMobileState } from "../states/mobile.state";

export const selectMobileStoreFeature =
  createFeatureSelector<IMobileState>("app");

export const getMobileStoreState = createSelector(
  selectMobileStoreFeature,
  (state) => {
    return state.mobileStore;
  }
);

export const getMobileState = (brandName: string) =>
  createSelector(selectMobileStoreFeature, (state) => {
    return state.mobiles[brandName];
  });
