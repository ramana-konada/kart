export interface IAdminState {
  loading: boolean;
  loaded: boolean;
  priceFilter: Array<number>;
}

export const adminInitialState: IAdminState = {
  loading: false,
  loaded: false,
  priceFilter: [],
};
