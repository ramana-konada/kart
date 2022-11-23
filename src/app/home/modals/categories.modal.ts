// import { forkJoin, Observable, of } from 'rxjs';

export interface ICategoriesModal {
  categoryId: string;
  categoryImage: string;
  categoryName: string;
  products: Array<{
    id: number;
    imageUrl: string;
    name: string;
    percentageText: string;
    availableBrands?: Array<string>;
  }>;
}

//----datatypes---
// const name: string = 'Arun';
// const age: number = 20;
// const married: boolean = false;
// const nameList: { lname: string; fname: string } = { lname: '', fname: '' };
// const hobbies: Array<string> = ['cricket', 'carroms'];
// const products: Array<{
//   id: number;
//   imageUrl: string;
// }> = [{ id: 0, imageUrl: '' }];
// const prods: ICategoriesModal = {
//   categoryId: '',
//   categoryImage: '',
//   categoryName: '',
//   products: [],
// };
// const product1: {
//   categoryId: string;
//   categoryImage: string;
//   categoryName: string;
//   products: Array<{
//     id: number;
//     imageUrl: string;
//     name: string;
//     percentageText: string;
//     availableBrands?: Array<string>;
//   }>;
// } = { categoryId: '', categoryImage: '', categoryName: '', products: [] };

// const state$: Observable<string> = of('');
// const state1$: Observable<number> = of(90);
// const state2$: Observable<string[]> = of(['', 'hello']);
// const state3$: Observable<ICategoriesModal> = of({
//   categoryId: '',
//   categoryImage: '',
//   categoryName: '',
//   products: [],
// });

//---observable datatypes---
// const state5$: Observable<[string, number, ICategoriesModal]> = forkJoin([
//   of(''),
//   of(90),
//   of({ categoryId: '', categoryImage: '', categoryName: '', products: [] }),
// ]);

// var stueis: string | number = '';
// stueis = 0;

// const keyName = 'potatao';
// const pINfo: { name: string; [id: string]: any } = {
//   name: '',
//   bodies: '',
//   [keyName]: 10,
// };
