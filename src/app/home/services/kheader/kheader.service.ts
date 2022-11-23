import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class KheaderService {
  constructor(private http: HttpClient) {}

  gettingHearder(): Observable<
    Array<{ label: string; classname: string; route: string }>
  > {
    return this.http.get<
      Array<{ label: string; classname: string; route: string }>
    >('./assets/menu-header.json');
  }
}
