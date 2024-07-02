import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HttpClientModule } from '@angular/common/http';

//Created Component Imports
import { DispensaryCardComponent } from './views/dispensaries-dashboard-view/components/dispensary-card/dispensary-card.component';
import { DispensariesDashboardViewComponent } from './views/dispensaries-dashboard-view/dispensaries-dashboard-view.component';

//Material Imports
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [
    AppComponent,
    DispensariesDashboardViewComponent,
    DispensaryCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    //Material Modules
    MatCardModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
