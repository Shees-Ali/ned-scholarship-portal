import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentPage } from './student.page';
import { StudentRoutingModule } from './student-routing.module';
import { ProfileCompletionModule } from 'src/app/pages/student/profile-completion/profile-completion.module';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MyApplicationsRoutingModule } from 'src/app/pages/student/my-applications/my-applications-routing.module';
import { ComponentsModule } from 'src/app/components/components.module';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';



@NgModule({
  declarations: [
    StudentPage
  ],
  imports: [
    CommonModule,
    StudentRoutingModule,
    MatIconModule,
    MatButtonModule,
    MatCheckboxModule,
    FormsModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    ProfileCompletionModule,
    MyApplicationsRoutingModule,
    ComponentsModule
  ]
})
export class StudentModule { }
