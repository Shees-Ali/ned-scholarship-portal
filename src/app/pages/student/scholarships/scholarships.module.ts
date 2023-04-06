import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScholarshipsPage } from './scholarships.page';
import { ScholarshipsRoutingModule } from './scholarships-routing.module';



@NgModule({
  declarations: [
    ScholarshipsPage
  ],
  imports: [
    CommonModule,
    ScholarshipsRoutingModule
  ]
})
export class ScholarshipsModule { }
