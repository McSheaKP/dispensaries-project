import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Dispensary } from '../../services/dispensary-client.types';

@Component({
  selector: 'dispensary-storefront-view',
  templateUrl: './dispensary-storefront-view.component.html',
  styleUrl: './dispensary-storefront-view.component.scss',
})
export class DispensaryStorefrontViewComponent {
  public dispensary: Dispensary;
  constructor(private _route: ActivatedRoute) {
    this.dispensary = this._route.snapshot.data['dispensaries'][0];
  }
}
