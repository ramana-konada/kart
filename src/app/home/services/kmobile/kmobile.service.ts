import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class KmobileService {
  constructor(private http: HttpClient) {}

  getMobiles(): Observable<
    Array<{
      model: string;
      avatar: string;
      speciality: string;
      brand: string;
      price: number;
      features: { display: string; battery?: string; cam?: string };
    }>
  > {
    return this.http.get<
      Array<{
        model: string;
        avatar: string;
        speciality: string;
        brand: string;
        price: number;
        features: { display: string; battery?: string; cam?: string };
      }>
    >('./assets/mobiles.json');
  }

  getMobile(brandName: string) {
    if (brandName === 'samsung') {
      return this.http.get('/assets/sam-mobList.json');
    } else if (brandName === 'redme') {
      return this.http.get('/assets/redme-mobList.json');
    } else if (brandName === 'realme') {
      return this.http.get('/assets/realme-mobList.json');
    }
    return of([]);
  }
}
