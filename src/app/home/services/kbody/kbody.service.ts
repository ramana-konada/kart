import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, Observable } from 'rxjs';
import { ICategoriesModal } from '../../modals/categories.modal';

@Injectable({
  providedIn: 'root',
})
export class KbodyService {
  constructor(private http: HttpClient) {}

  getBody(): Observable<
    [ICategoriesModal, ICategoriesModal, ICategoriesModal, ICategoriesModal]
  > {
    return forkJoin([
      this.http.get<ICategoriesModal>('./assets/categories.json'),
      this.http.get<ICategoriesModal>('./assets/categories1.json'),
      this.http.get<ICategoriesModal>('./assets/categories2.json'),
      this.http.get<ICategoriesModal>('./assets/categories3.json'),
    ]);
  }
}

//   getBody(): Observable<
//     {
//       id: string;
//       imageUrl: string;
//       name: string;
//       percentageText: string;
//       availableBrands: string;
//     }[]
//   > {
//     return this.http.get<
//       {
//         id: string;
//         imageUrl: string;
//         name: string;
//         percentageText: string;
//         availableBrands: string;
//       }[]
//     >('./assets/rough.json');
//   }
// }
