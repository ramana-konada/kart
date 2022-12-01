import { ActionReducerMap } from "@ngrx/store";
import { IHomeState } from "../states/home.state";
import { IMobileState } from "../states/mobile.state";
import { homeReducer } from "./home.reducer";
import { mobileStoreReducer } from "./mobile.reducer";

export interface IKartState {
  home: IHomeState;
  mobile: IMobileState;
}

export const kartReducer: ActionReducerMap<IKartState> = {
  home: homeReducer,
  mobile: mobileStoreReducer,
};
