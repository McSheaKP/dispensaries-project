import { Component } from '@angular/core';
import { DispenariesDashboardApiService } from '../../services/dispenaries-dashboard-api.service';
import { Dispensary } from '../../services/dispenaries.types';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'dispensaries-dashboard-view',
  templateUrl: './dispensaries-dashboard-view.component.html',
  styleUrl: './dispensaries-dashboard-view.component.scss'
})
export class DispensariesDashboardViewComponent {

  public dispensaryList: Dispensary[];
  
  constructor(private _dispenaryDashboardApiService: DispenariesDashboardApiService, private _route: ActivatedRoute) {
    this.dispensaryList = this._route.snapshot.data['dispensaries'];
    console.log(this.dispensaryList)
   }

  ngOnInit() { }

  
}
