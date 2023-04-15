import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApplicantListComponent } from './applicant-list.page';
import { ApplicantListRoutingRoutingModule } from './applicant-list-routing.module';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    ApplicantListComponent
  ],
  imports: [
    CommonModule,
    ApplicantListRoutingRoutingModule,
    MatGridListModule,
    MatButtonModule
  ]
})
export class ApplicantListModule { }
