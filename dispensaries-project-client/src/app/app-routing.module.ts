import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DispensariesDashboardViewComponent } from './views/dispensaries-dashboard-view/dispensaries-dashboard-view.component';
import { DispensayDashboardResolver } from './data-resolvers/dispensary-dashboard-resolver';
import { DispensaryStorefrontViewComponent } from './views/dispensary-storefront-view/dispensary-storefront-view.component';
import { DispensayStorefrontResolver } from './data-resolvers/dispensary-storefront-resolver';

const routes: Routes = [
  {
    path: 'home',
    title: 'Dispensaries Dashboard',
    component: DispensariesDashboardViewComponent,
    resolve: { dispensaries: DispensayDashboardResolver },
  },
  {
    path: ':storeName',
    component: DispensaryStorefrontViewComponent,
    resolve: { dispensaries: DispensayStorefrontResolver },
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: '/home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
