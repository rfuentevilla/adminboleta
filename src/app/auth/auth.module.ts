import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LoginComponent } from './login/login.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DemoMaterialModule } from '../demo-material-module';
import { RouterModule } from '@angular/router';
import { AuthRoutes } from './auth.routing';



@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    DemoMaterialModule,
    RouterModule.forChild(AuthRoutes)
  ]
})
export class AuthModule { }
