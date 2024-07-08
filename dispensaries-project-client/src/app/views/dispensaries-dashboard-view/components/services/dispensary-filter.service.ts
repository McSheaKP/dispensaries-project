import { Injectable } from '@angular/core';
import { Dispensary } from '../../../../services/dispensary-client.types';

@Injectable({
  providedIn: 'root',
})
export class DispensaryFilterService {
  constructor() {}

  public dispensariesListCache!: Dispensary[];

  filterDispensariesByRating(minRating: number): Dispensary[] {
    let dispensariesList = [...this.dispensariesListCache];
    dispensariesList = dispensariesList.filter(
      (dispensary: Dispensary) => dispensary.rating >= minRating
    );
    return dispensariesList;
  }

  filterDispensariesById(id: string): Dispensary[] {
    let dispensariesList = [...this.dispensariesListCache];
    dispensariesList = dispensariesList.filter(
      (dispensary: Dispensary) => dispensary._id.$oid == id
    );
    return dispensariesList;
  }

  filterDispensariesWhenSelectedStoreName(storeName: string): Dispensary[] {
    let dispensariesList = [...this.dispensariesListCache];
    dispensariesList = dispensariesList.filter(
      (dispensary: Dispensary) => dispensary.name == storeName
    );
    return dispensariesList;
  }
}
