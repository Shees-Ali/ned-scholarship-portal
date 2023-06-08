import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApplicantListComponent } from './applicant-list.page';
import { ApplicantListRoutingRoutingModule } from './applicant-list-routing.module';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ApplicantListComponent
  ],
  imports: [
    CommonModule,
    ApplicantListRoutingRoutingModule,
    FormsModule,
    MatGridListModule,
    MatButtonModule,
    MatRadioModule
  ]
})
export class ApplicantListModule { }
