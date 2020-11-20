import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { SpinnerComponent } from './spinner.component';
import { DemoMaterialModule } from '../demo-material-module';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
  AccordionAnchorDirective,
  AccordionLinkDirective,
  AccordionDirective
} from './accordion';
import { MenuItems } from './menu-items/menu-items';

@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    BreadcrumbComponent,
    SpinnerComponent,
    AccordionAnchorDirective,
    AccordionLinkDirective,
    AccordionDirective,
  ],
  imports: [
    CommonModule,
    FormsModule,
    DemoMaterialModule,
    PerfectScrollbarModule,
    RouterModule,
    FlexLayoutModule
  ],
  exports: [
    HeaderComponent,
    SidebarComponent,
    BreadcrumbComponent,
    SpinnerComponent
  ],
  providers: [ MenuItems ]
})
export class SharedModule { }
