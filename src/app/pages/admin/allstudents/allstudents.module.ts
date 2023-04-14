import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllstudentsPage } from './allstudents.page';
import { AllstudentsRoutingModule } from './allstudents-routing.module';
import { MatGridListModule } from '@angular/material/grid-list';



@NgModule({
  declarations: [
    AllstudentsPage
  ],
  imports: [
    CommonModule,
    AllstudentsRoutingModule,
    MatGridListModule
  ]
})
export class AllstudentsModule { }
