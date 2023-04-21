import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScholarshipDetailsPage } from './scholarship-details.page';
import { ScholarshipDetailsRoutingModule } from './scholarship-details-routing.module';
import { FirstScholarshipPageComponent } from './first-scholarship-page/first-scholarship-page.component';
import { SecondScholarshipPageComponent } from './second-scholarship-page/second-scholarship-page.component';
import { ThirdScholarshipPageComponent } from './third-scholarship-page/third-scholarship-page.component';
import { FourthScholarshipPageComponent } from './fourth-scholarship-page/fourth-scholarship-page.component';
import { SubmitApplicationPageComponent } from './submit-application-page/submit-application-page.component';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { FormsModule } from '@angular/forms';
import { ProfileCompletionModule } from '../profile-completion/profile-completion.module';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
@NgModule({
  declarations: [
    ScholarshipDetailsPage,
    FirstScholarshipPageComponent,
    SecondScholarshipPageComponent,
    ThirdScholarshipPageComponent,
    FourthScholarshipPageComponent,
    SubmitApplicationPageComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ScholarshipDetailsRoutingModule,
    AngularEditorModule,
    MatButtonModule,
    MatCheckboxModule,
    ProfileCompletionModule
  ],
})
export class ScholarshipDetailsModule {}
