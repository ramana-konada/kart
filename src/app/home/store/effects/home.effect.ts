import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  catchError,
  delay,
  forkJoin,
  map,
  mergeMap,
  of,
  switchMap,
} from 'rxjs';
import {
  loadMenus,
  loadMenusSuccess,
  loadMenufailure,
  loadCategories,
  loadCategoriesSuccess,
  loadCategoriesFailure,
} from '../actions/home.action';

@Injectable()
export class HomeEffect {
  constructor(private actions$: Actions, private http: HttpClient) {}

  loadMenus$ = createEffect((): any =>
    this.actions$.pipe(
      ofType(loadMenus),
      switchMap(() => this.http.get('http://localhost:3000/home/menus')),
      map((response: any) => {
        if (response.success) {
          return loadMenusSuccess({ menus: response.data });
        } else {
          return loadMenufailure();
        }
      })
    )
  );

  loadCategories$ = createEffect((): any =>
    this.actions$.pipe(
      ofType(loadCategories),
      switchMap(() =>
        forkJoin([
          this.http.get('http://localhost:3000/home/category/beauty'),
          this.http.get('http://localhost:3000/home/category/womensaree'),
          this.http.get('http://localhost:3000/home/category/sports'),
          this.http.get('http://localhost:3000/home/category/winter'),
        ])
      ),
      delay(2000),
      map((response: any) => {
        if (response.every((res: any) => res.success)) {
          return loadCategoriesSuccess({
            beauty: response[0].data,
            womensaree: response[1].data,
            sports: response[2].data,
            winter: response[3].data,
          });
        } else {
          return loadCategoriesFailure();
        }
      })
    )
  );
}
