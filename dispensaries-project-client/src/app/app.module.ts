import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms'; // Import this module

//Created Component Imports
import { DispensaryCardComponent } from './views/dispensaries-dashboard-view/components/dispensary-card/dispensary-card.component';
import { DispensariesDashboardViewComponent } from './views/dispensaries-dashboard-view/dispensaries-dashboard-view.component';
import { DispensaryFilterComponent } from './views/dispensaries-dashboard-view/components/dispensary-filter/dispensary-filter.component';

//Material Imports
import { MatCardModule } from '@angular/material/card';
import { MatSliderModule } from '@angular/material/slider';
import { MatFormFieldModule } from '@angular/material/form-field'; // Import MatFormFieldModule
import { MatInputModule } from '@angular/material/input'; // Import MatInputModule if not already
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatDividerModule } from '@angular/material/divider';
import { DispensaryStorefrontViewComponent } from './views/dispensary-storefront-view/dispensary-storefront-view.component';

@NgModule({
  declarations: [
    AppComponent,
    DispensariesDashboardViewComponent,
    DispensaryCardComponent,
    DispensaryFilterComponent,
    DispensaryStorefrontViewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    //Material Modules
    MatCardModule,
    MatSliderModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    MatDividerModule,
  ],
  providers: [provideAnimationsAsync()],
  bootstrap: [AppComponent],
})
export class AppModule {}
