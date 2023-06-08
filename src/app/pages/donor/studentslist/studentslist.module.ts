import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentslistPage } from './studentslist.page';
import { StudentslistRoutingModule } from './studentslist-routing.module';



@NgModule({
  declarations: [
    StudentslistPage
  ],
  imports: [
    CommonModule,
    StudentslistRoutingModule
  ]
})
export class StudentslistModule { }
