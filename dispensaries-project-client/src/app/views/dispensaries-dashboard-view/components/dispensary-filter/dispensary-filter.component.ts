import { Component, Input, OnInit } from '@angular/core';
import { IDispensaryFilterFormModel } from './dispenary-filter.types';
import { Dispensary } from '../../../../services/dispensary-client.types';
import { Observable, map, startWith } from 'rxjs';

@Component({
  selector: 'dispensary-filter',
  templateUrl: './dispensary-filter.component.html',
  styleUrl: './dispensary-filter.component.scss',
})
export class DispensaryFilterComponent implements OnInit {
  @Input() dispensaryFormModel!: IDispensaryFilterFormModel;
  @Input() dispensaries!: string[];

  public filteredOptions!: Observable<string[]>;

  constructor() {}

  formatLabel(value: number): string {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }

    return `${value}`;
  }

  ngOnInit() {
    this.filteredOptions =
      this.dispensaryFormModel.formGroup.controls.search.valueChanges.pipe(
        startWith(''),
        map((value) => this._filter(value || ''))
      );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.dispensaries.filter((name: string) => {
      return name.toLowerCase().includes(filterValue);
    });
  }
}
