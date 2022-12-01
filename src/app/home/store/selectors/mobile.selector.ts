import { createFeatureSelector, createSelector } from "@ngrx/store";
import { IKartState } from "../reducers/kart-bundle.reducer";
import { IMobileState } from "../states/mobile.state";

export const selectKartFeature = createFeatureSelector<IKartState>("kart");

export const selectMobileStoreFeature = createSelector(
  selectKartFeature,
  (state) => {
    return state.mobile;
  }
);

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
