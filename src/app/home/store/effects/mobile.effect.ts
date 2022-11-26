import { HttpClient, HttpResponseBase } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { createEffects } from "@ngrx/effects/src/effects_module";
import { Action } from "@ngrx/store";
import { delay, map, switchMap } from "rxjs";
import {
  loadMobileDetailView,
  loadMobileDetailViewSuccess,
  loadMobileStore,
  loadMobileStoreFailure,
  loadMobileStoreSuccess,
} from "../actions/mobile.action";

@Injectable()
export class MobileEffect {
  constructor(private actions$: Actions, private http: HttpClient) {}

  loadMobileStore$ = createEffect((): any =>
    this.actions$.pipe(
      ofType(loadMobileStore),
      switchMap(() =>
        this.http.get("http://localhost:3000/home/mobiles-store")
      ),
      delay(2000),
      map((response: any) => {
        if (response.success) {
          return loadMobileStoreSuccess({ mobileStoreList: response.data });
        } else {
          return loadMobileStoreFailure();
        }
      })
    )
  );

  loadMobileDetailView$ = createEffect((): any =>
    this.actions$.pipe(
      ofType(loadMobileDetailView),
      switchMap(({ brandName }) =>
        this.http.get(`http://localhost:3000/home/mobiles/${brandName}`).pipe(
          map((payload) => {
            return { response: payload, brandName };
          })
        )
      ),
      map(({ response, brandName }: any) => {
        if (response.success) {
          return loadMobileDetailViewSuccess({
            details: response.data,
            brandName,
          });
        } else {
          return loadMobileStoreFailure();
        }
      })
    )
  );
}
