import { createReducer, on } from "@ngrx/store";
import { create } from "lodash";
import { IMobileStoreModal } from "../../modals/mobile-store.modal";
import {
  loadMobileDetailView,
  loadMobileDetailViewSuccess,
  loadMobileStore,
  loadMobileStoreSuccess,
} from "../actions/mobile.action";
import { IMobileState, initialMobileStoreState } from "../states/mobile.state";

export const mobileStoreReducer = createReducer(
  initialMobileStoreState,
  on(loadMobileStore, (state) => {
    return {
      ...state,
      loading: false,
    };
  }),
  on(loadMobileStoreSuccess, (state, { mobileStoreList }): IMobileState => {
    return {
      ...state,
      loading: false,
      mobileStore: mobileStoreList,
    };
  }),
  on(loadMobileDetailView, (state) => {
    return {
      ...state,
      loading: false,
    };
  }),
  on(
    loadMobileDetailViewSuccess,
    (state, { details, brandName }): IMobileState => {
      return {
        ...state,
        loading: false,
        mobiles: {
          ...state.mobiles,
          [brandName]: details,
        },
      };
    }
  )
);
