import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { FlexLayoutModule } from '@angular/flex-layout';
import { ChartistModule } from 'ng-chartist';
import { ChartsModule } from 'ng2-charts';
import { NgApexchartsModule } from 'ng-apexcharts';

import { DemoMaterialModule } from '../demo-material-module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { PagesComponent } from './pages.component';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { BoletasComponent } from './boletas/boletas.component';
import { FoliosComponent } from './folios/folios.component';

@NgModule({
  declarations: [
    DashboardComponent,
    PagesComponent,
    BoletasComponent,
    FoliosComponent
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
    PagesComponent
  ]
})
export class PagesModule { }
