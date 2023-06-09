import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DonordetailsPage } from './donordetails.page';
import { DonordetailsRoutingModule } from './donordetails-routing.module';



@NgModule({
  declarations: [
    DonordetailsPage
  ],
  imports: [
    CommonModule,
    DonordetailsRoutingModule
  ]
})
export class DonordetailsModule { }
