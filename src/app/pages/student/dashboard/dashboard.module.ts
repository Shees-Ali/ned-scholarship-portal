import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardPage } from './dashboard.page';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { ComponentsModule } from 'src/app/components/components.module';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    DashboardPage
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ComponentsModule,
    MatButtonModule
  ]
})
export class DashboardModule { }
