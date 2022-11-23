import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IHomeState } from '../states/home.state';

export const selectHomeFeature = createFeatureSelector<IHomeState>('kart');

export const getMenuState = createSelector(selectHomeFeature, (state) => {
  return state.menus;
});

export const getCategoriesState = createSelector(selectHomeFeature, (state) => {
  return state.category;
});

export const getLoadingState = createSelector(selectHomeFeature, (state) => {
  return state.loading;
});
