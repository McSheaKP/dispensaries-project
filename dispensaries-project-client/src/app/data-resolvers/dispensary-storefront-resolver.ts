import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { DispenariesDashboardApiService } from '../services/dispenaries-dashboard-api.service';
import { Dispensaries, Dispensary } from '../services/dispensary-client.types';
import { DispensaryFilterService } from '../views/dispensaries-dashboard-view/components/services/dispensary-filter.service';

@Injectable({
  providedIn: 'root',
})
export class DispensayStorefrontResolver {
  constructor(private _dispensaryFilterService: DispensaryFilterService) {}

  resolve(route: ActivatedRouteSnapshot): Dispensary[] {
    console.log(route);
    const dispensary =
      this._dispensaryFilterService.filterDispensariesWhenSelectedStoreName(
        route.params['storeName']
      );
    return dispensary;
  }
}
