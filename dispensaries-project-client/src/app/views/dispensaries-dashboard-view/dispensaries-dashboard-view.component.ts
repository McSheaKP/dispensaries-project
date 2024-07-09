import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  DispensaryFilterFormModel,
  IDispensaryFilterFormModel,
} from './components/dispensary-filter/dispenary-filter.types';
import {
  Dispensaries,
  Dispensary,
} from '../../services/dispensary-client.types';
import { DispensaryFilterService } from './components/services/dispensary-filter.service';

@Component({
  selector: 'dispensaries-dashboard-view',
  templateUrl: './dispensaries-dashboard-view.component.html',
  styleUrl: './dispensaries-dashboard-view.component.scss',
})
export class DispensariesDashboardViewComponent {
  public dispensaryList!: Dispensaries;
  public formControlDispensaryList!: Dispensary[];
  public dispensaryFilterFormModel!: IDispensaryFilterFormModel;
  public dispensaryNameList: string[] = [];

  constructor(
    private _route: ActivatedRoute,
    private _dispensaryFilterService: DispensaryFilterService
  ) {
    this.setupData();
    this.setupFilters();
    this.setupFormControlChanges();
  }

  setupFormControlChanges(): void {
    this.dispensaryFilterFormModel.formGroup.controls.search.valueChanges.subscribe(
      (name: string | null) => {
        if (name !== null && this.dispensaryNameList.includes(name)) {
          this.dispensaryList.results =
            this._dispensaryFilterService.filterDispensariesWhenSelectedStoreName(
              name
            );
        } else {
          this.dispensaryList.results = [
            ...this._dispensaryFilterService.dispensariesListCache,
          ];
        }
      }
    );
  }

  setupData(): void {
    this.dispensaryList = this._route.snapshot.data['dispensaries'];
    this.formControlDispensaryList =
      this._route.snapshot.data['dispensaries'].results;

    this._dispensaryFilterService.dispensariesListCache = [
      ...this._route.snapshot.data['dispensaries'].results,
    ];
    this.dispensaryNameList = this.formControlDispensaryList.map(
      (dis) => dis.name
    );

    this.dispensaryFilterFormModel = new DispensaryFilterFormModel();
  }

  setupFilters(): void {
    const controls = this.dispensaryFilterFormModel.formGroup.controls;
    controls.rating.valueChanges.subscribe((value: number | null) => {
      if (value !== null) {
        this.dispensaryList.results =
          this._dispensaryFilterService.filterDispensariesByRating(value);
      }
    });
  }

  ngOnInit() {}
}
