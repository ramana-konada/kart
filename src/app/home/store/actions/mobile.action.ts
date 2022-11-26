import { createAction, props } from "@ngrx/store";
import { IMobileStoreModal } from "../../modals/mobile-store.modal";

export const loadMobileStore = createAction("[mobileStore] LOAD MOBILESTORE");

export const loadMobileStoreSuccess = createAction(
  "[mobileStore] LOAD MOBILESTORE SUCCESS",
  props<{ mobileStoreList: IMobileStoreModal[] }>()
);

export const loadMobileStoreFailure = createAction(
  "[mobileStore] LOAD MOBILESTORE FAILURE"
);

export const loadMobileDetailView = createAction(
  "[mobileStore] LOAD DETAIL VIEW",
  props<{ brandName: string }>()
);

export const loadMobileDetailViewSuccess = createAction(
  "[mobileStore] LOAD DETAIL VIEW SUCCESS",
  props<{ details: any; brandName: string }>()
);

export const loadMobileDetailViewFailure = createAction(
  "[mobileStore] LOAD DETAIL VIEW FAILURE"
);
