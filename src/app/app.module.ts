import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';

import { PagesModule } from './pages/pages.module';
import { DemoMaterialModule } from './demo-material-module';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
// import { LoginComponent } from './auth/login/login.component';
// import { RegisterComponent } from './auth/register/register.component';
import { AuthModule } from './auth/auth.module';


const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
  wheelSpeed: 2,
  wheelPropagation: true
};

@NgModule({
  declarations: [
    AppComponent,
    NopagefoundComponent,
  ],
  imports: [
    BrowserModule,
    DemoMaterialModule,
    PagesModule,
    AuthModule,
    PerfectScrollbarModule,
    FormsModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgMultiSelectDropDownModule.forRoot(),
  ],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
