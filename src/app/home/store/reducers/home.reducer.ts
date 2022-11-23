import { createReducer, on } from '@ngrx/store';
import {
  loadCategories,
  loadCategoriesFailure,
  loadCategoriesSuccess,
  loadMenufailure,
  loadMenus,
  loadMenusSuccess,
} from '../actions/home.action';
import { IHomeState, initialHomeState } from '../states/home.state';

export const homeReducer = createReducer(
  initialHomeState,
  on(loadMenus, (state): IHomeState => {
    return {
      ...state,
      loading: true,
    };
  }),
  on(loadMenusSuccess, (state, { menus }): IHomeState => {
    return {
      ...state,
      loading: false,
      menus,
    };
  }),
  on(loadMenufailure, (state): IHomeState => {
    return {
      ...state,
      loading: false,
    };
  }),
  on(loadCategories, (state) => {
    return {
      ...state,
      loaded: true,
    };
  }),
  on(
    loadCategoriesSuccess,
    (state, { beauty, womensaree, winter, sports }): IHomeState => {
      return {
        ...state,
        loaded: false,
        category: {
          beauty,
          womensaree,
          winter,
          sports,
        },
      };
    }
  ),
  on(loadCategoriesFailure, (state) => {
    return {
      ...state,
      loaded: false,
    };
  })
);
