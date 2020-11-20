import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { FlexLayoutModule } from '@angular/flex-layout';
import { ChartistModule } from 'ng-chartist';
import { ChartsModule } from 'ng2-charts';
import { NgApexchartsModule } from 'ng-apexcharts';

import { DemoMaterialModule } from '../demo-material-module';
import { SharedModule } from '../shared/shared.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesComponent } from './pages.component';
import { BoletasComponent } from './boletas/boletas.component';
import { FoliosComponent } from './folios/folios.component';


import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';

@NgModule({
  declarations: [
    DashboardComponent,
    BoletasComponent,
    FoliosComponent,
    PagesComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    DemoMaterialModule,
    SharedModule,
    PerfectScrollbarModule,
    FormsModule,
    FlexLayoutModule,
    ChartistModule,
    ChartsModule,
    NgApexchartsModule
  ],
  exports: [
    DashboardComponent,
    BoletasComponent,
    FoliosComponent,
    PagesComponent
  ]
})
export class PagesModule { }
