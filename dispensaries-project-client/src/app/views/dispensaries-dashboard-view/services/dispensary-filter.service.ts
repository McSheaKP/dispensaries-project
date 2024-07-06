import { Injectable } from '@angular/core';
import { IDispensaryBackend } from '../../../services/dispenary-backend.types';

@Injectable({
  providedIn: 'root',
})
export class DispensaryFilterService {
  constructor() {}

  filterDispensariesByRating(
    minRating: number,
    dispensaries: IDispensaryBackend[]
  ): IDispensaryBackend[] {
    return dispensaries.filter(
      (dispensary: IDispensaryBackend) => dispensary.rating >= minRating
    );
  }
}
