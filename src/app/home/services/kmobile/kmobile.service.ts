import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { IMobileStoreModal } from "../../modals/mobile-store.modal";

@Injectable({
  providedIn: "root",
})
export class KmobileService {
  constructor(private http: HttpClient) {}

  getMobiles(): Observable<IMobileStoreModal[]> {
    return this.http.get<IMobileStoreModal[]>("./assets/mobiles.json");
  }

  getMobile(brandName: string) {
    if (brandName === "samsung") {
      return this.http.get("/assets/sam-mobList.json");
    } else if (brandName === "redme") {
      return this.http.get("/assets/redme-mobList.json");
    } else if (brandName === "realme") {
      return this.http.get("/assets/realme-mobList.json");
    }
    return of([]);
  }
}
