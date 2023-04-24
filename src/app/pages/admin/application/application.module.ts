import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApplicationPage } from './application.page';
import { ApplicationRoutingModule } from './application-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { ProfileCompletionModule } from '../../student/profile-completion/profile-completion.module';

@NgModule({
  declarations: [
    ApplicationPage
  ],
  imports: [
    CommonModule,
    ApplicationRoutingModule,
    MatButtonModule,
    ProfileCompletionModule
  ]
})
export class ApplicationModule { }
