import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DonorPage } from './donor.page';
import { DonorRoutingModule } from './donor-routing.module';



@NgModule({
  declarations: [
    DonorPage
  ],
  imports: [
    CommonModule,
    DonorRoutingModule
  ]
})
export class DonorModule { }
