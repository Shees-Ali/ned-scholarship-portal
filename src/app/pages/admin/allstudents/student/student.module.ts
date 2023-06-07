import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentPage } from './student.page';
import { StudentRoutingModule } from './student-routing.module';
import { ProfileCompletionModule } from 'src/app/pages/student/profile-completion/profile-completion.module';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';



@NgModule({
  declarations: [
    StudentPage
  ],
  imports: [
    CommonModule,
    StudentRoutingModule,
    MatIconModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    ProfileCompletionModule
  ]
})
export class StudentModule { }
