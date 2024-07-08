import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, share, throwError } from 'rxjs';
import { IDispensaryBackend } from './dispenary-backend.types';
import { Dispensaries } from './dispensary-client.types';

@Injectable({
  providedIn: 'root',
})
export class DispenariesDashboardApiService {
  private apiUrl = 'assets/dispensaries.json';
  constructor(private http: HttpClient) {}

  getItems(): Observable<Dispensaries> {
    const request = this.http.get<IDispensaryBackend[]>(this.apiUrl).pipe(
      catchError((res) => {
        if (res.error) {
          console.error(res.error);
        }
        return throwError(res);
      }),
      map((resp: IDispensaryBackend[]) => {
        return Dispensaries.fromBackend(resp);
      }),
      share() // make hot to avoid multiple subscriptions creating multiple requests
    );

    return request;
  }
}
