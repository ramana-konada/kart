import { IMobileStoreModal } from "../../modals/mobile-store.modal";

export interface IMobileState {
  loaded: boolean;
  loading: boolean;
  mobileStore: IMobileStoreModal[];
  mobiles: { [id: string]: any };
}

export const initialMobileStoreState: IMobileState = {
  loaded: false,
  loading: false,
  mobileStore: [],
  mobiles: {},
};
