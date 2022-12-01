export interface IOrderlist {
  loaded: boolean;
  loading: boolean;
  orders: Array<{}>;
}

export const initialOrderListState: IOrderlist = {
  loaded: false,
  loading: false,
  orders: [],
};
