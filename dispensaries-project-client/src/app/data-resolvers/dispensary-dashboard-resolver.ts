import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { DispenariesDashboardApiService } from '../services/dispenaries-dashboard-api.service';
import { IDispensaryBackend } from '../services/dispenary-backend.types';

@Injectable({
  providedIn: 'root',
})
export class DispensayDashboardResolver {
  constructor(private _dispensaryDashboardApiService: DispenariesDashboardApiService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<IDispensaryBackend[]> {
    return this._dispensaryDashboardApiService
      .getItems()
      .pipe(
        catchError((error: any) => {
          if (error) {
            console.error('ERROR!', error.extraInfo);
          }
          //-- rethrow error for other subscribers to handle
          return throwError(() => new Error(error));
        })
      );
  }  
}