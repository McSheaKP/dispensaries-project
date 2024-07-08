import { FormControl, FormGroup } from '@angular/forms';

export interface IDispensaryFilterFormModel {
  formGroup: FormGroup<IFitlersForm>;
}

export interface IFitlersForm {
  rating: FormControl<number | null>;
  search: FormControl<string | null>;
}

export class DispensaryFilterFormModel implements IDispensaryFilterFormModel {
  formGroup!: FormGroup<IFitlersForm>;

  constructor() {
    this.formGroup = new FormGroup<IFitlersForm>({
      rating: new FormControl<number | null>(null),
      search: new FormControl<string | null>(null),
    });
  }
}
