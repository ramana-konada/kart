import { createAction, props } from "@ngrx/store";

export const loadOrderList: any = createAction("[orders] LOAD ORDERLIST");

export const loadOrderListSuccess = createAction(
  "[orders] LOAD ORDERLIST SUCCESS",
  props<{ orders: Array<{}>; grid: Array<{}> }>()
);
