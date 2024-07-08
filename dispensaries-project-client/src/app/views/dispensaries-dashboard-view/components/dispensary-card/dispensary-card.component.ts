import { Component, Input, input } from '@angular/core';

import { Dispensary } from '../../../../services/dispensary-client.types';
import { Router } from '@angular/router';

@Component({
  selector: 'dispensary-card',
  templateUrl: './dispensary-card.component.html',
  styleUrl: './dispensary-card.component.scss',
})
export class DispensaryCardComponent {
  @Input()
  dispensary!: Dispensary;
  constructor(private router: Router) {}

  navigateToStore(dispenary: Dispensary): void {
    console;
    this.router.navigate(['/store', dispenary.name]);
  }
}
