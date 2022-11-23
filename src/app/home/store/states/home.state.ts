import { ICategoriesModal } from '../../modals/categories.modal';

export interface IHomeState {
  loading: boolean;
  loaded: boolean;
  menus: Array<{ label: string; classname: string; route: string }>;
  category: {
    beauty: Array<ICategoriesModal>;
    womensaree: Array<ICategoriesModal>;
    winter: Array<ICategoriesModal>;
    sports: Array<ICategoriesModal>;
  };
}

export const initialHomeState: IHomeState = {
  loading: false,
  loaded: false,
  menus: [],
  category: { beauty: [], womensaree: [], winter: [], sports: [] },
};
