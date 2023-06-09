import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentslistPage } from './studentslist.page';
import { StudentslistRoutingModule } from './studentslist-routing.module';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    StudentslistPage
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    StudentslistRoutingModule
  ]
})
export class StudentslistModule { }
