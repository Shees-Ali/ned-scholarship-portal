import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllstudentsPage } from './allstudents.page';
import { AllstudentsRoutingModule } from './allstudents-routing.module';



@NgModule({
  declarations: [
    AllstudentsPage
  ],
  imports: [
    CommonModule,
    AllstudentsRoutingModule
  ]
})
export class AllstudentsModule { }
