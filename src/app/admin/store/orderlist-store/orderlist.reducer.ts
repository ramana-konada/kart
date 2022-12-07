import { createReducer, on } from "@ngrx/store";
import { loadOrderList, loadOrderListSuccess } from "./orderlist.action";
import { initialOrderListState, IOrderlist } from "./orderlist.state";

export const orderListReducer = createReducer(
  initialOrderListState,
  on(loadOrderList, (state) => {
    return {
      ...state,
      loading: false,
    };
  }),
  on(loadOrderListSuccess, (state, { orders, grid }) => {
    return {
      ...state,
      loading: false,
      orders,
      grid,
    };
  })
);
