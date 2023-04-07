import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScholarshipDetailsPage } from './scholarship-details.page';
import { ScholarshipDetailsRoutingModule } from './scholarship-details-routing.module';
import {FirstScholarshipPageComponent} from './first-scholarship-page/first-scholarship-page.component'
import {SecondScholarshipPageComponent} from './second-scholarship-page/second-scholarship-page.component'
import { ThirdScholarshipPageComponent } from './third-scholarship-page/third-scholarship-page.component';
import { FourthScholarshipPageComponent } from './fourth-scholarship-page/fourth-scholarship-page.component';
import { SubmitApplicationPageComponent } from './submit-application-page/submit-application-page.component';
@NgModule({
  declarations: [
    ScholarshipDetailsPage,
    FirstScholarshipPageComponent,
    SecondScholarshipPageComponent,
    ThirdScholarshipPageComponent,
    FourthScholarshipPageComponent,
    SubmitApplicationPageComponent
    
  ],
  imports: [
    CommonModule,
    ScholarshipDetailsRoutingModule
  ]
})
export class ScholarshipDetailsModule { }
