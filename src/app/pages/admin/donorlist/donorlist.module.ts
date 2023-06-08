import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DonorlistPage } from './donorlist.page';
import { DonorlistRoutingModule } from './donorlist-routing.module';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    DonorlistPage
  ],
  imports: [
    CommonModule,
    DonorlistRoutingModule,
    MatButtonModule
  ]
})
export class DonorlistModule { }
