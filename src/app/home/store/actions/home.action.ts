import { createAction, props } from '@ngrx/store';
import { ICategoriesModal } from '../../modals/categories.modal';

export const loadMenus = createAction('[home] LOAD HOME');

export const loadMenusSuccess = createAction(
  '[home] LOAD HOME SUCCESS',
  props<{ menus: Array<{ label: string; classname: string; route: string }> }>()
);

export const loadMenufailure = createAction('[home] LOAD HOME FAILURE');

export const loadCategories = createAction('[category] LOAD CATEGORY');

export const loadCategoriesSuccess = createAction(
  '[category] LOAD CATEGORY SUCCESS',
  props<{
    beauty: Array<ICategoriesModal>;
    womensaree: Array<ICategoriesModal>;
    sports: Array<ICategoriesModal>;
    winter: Array<ICategoriesModal>;
  }>()
);

export const loadCategoriesFailure = createAction(
  '[category] LOAD CATEGORY FAILURE'
);
