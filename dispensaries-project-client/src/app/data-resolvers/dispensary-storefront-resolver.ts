import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';
import { Dispensary } from '../services/dispensary-client.types';
import { DispensaryFilterService } from '../views/dispensaries-dashboard-view/components/services/dispensary-filter.service';

@Injectable({
  providedIn: 'root',
})
export class DispensayStorefrontResolver {
  constructor(private _dispensaryFilterService: DispensaryFilterService) {}

  resolve(route: ActivatedRouteSnapshot): Dispensary[] {
    const dispensary = this._dispensaryFilterService.filterDispensariesById(
      route.params['id']
    );
    return dispensary;
  }
}
