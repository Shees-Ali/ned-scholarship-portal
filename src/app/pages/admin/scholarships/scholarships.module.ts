import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScholarshipsPage } from './scholarships.page';
import { ScholarshipsRoutingModule } from './scholarships-routing.module';
import { ComponentsModule } from 'src/app/components/components.module';



@NgModule({
  declarations: [
    ScholarshipsPage
  ],
  imports: [
    CommonModule,
    ScholarshipsRoutingModule,
    ComponentsModule  
  ]
})
export class ScholarshipsModule { }
