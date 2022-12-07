import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { createEffects } from "@ngrx/effects/src/effects_module";
import { forkJoin, map, switchMap } from "rxjs";
import { loadOrderList, loadOrderListSuccess } from "./orderlist.action";

@Injectable()
export class OrderListEffect {
  constructor(private actions$: Actions, private http: HttpClient) {}

  loadOrdersList$ = createEffect((): any =>
    this.actions$.pipe(
      ofType(loadOrderList),
      switchMap(() =>
        forkJoin([
          this.http.get("./assets/orders.json"),
          this.http.get("./assets/grid.json"),
        ])
      ),
      map((s: any) => {
        return loadOrderListSuccess({ orders: s[0], grid: s[1] });
      })
    )
  );
}
