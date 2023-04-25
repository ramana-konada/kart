import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, Subject } from "rxjs";
import { ICategoriesModal } from "../../modals/categories.modal";

@Injectable({
  providedIn: "root",
})
export class ProductsService {
  obs$ = new Subject();
  constructor(private http: HttpClient) {}

  getProducts(): Observable<ICategoriesModal> {
    return this.http.get<ICategoriesModal>("./assets/categories.json");
  }

  // getProducts(): Observable<Array<{}>> {
  //   return this.http.get<Array<{}>>('./assets/categories.json');
  // }
  passValue(data: any) {
    this.obs$.next(data);
  }
}
