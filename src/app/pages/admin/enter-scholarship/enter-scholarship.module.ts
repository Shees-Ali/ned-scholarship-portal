import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnterScholarshipComponent } from './enter-scholarship.page';
import { EnterScholarshipRoutingRoutingModule } from './enter-scholarship-routing.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [EnterScholarshipComponent],
  imports: [
    CommonModule,
    EnterScholarshipRoutingRoutingModule,
    MatFormFieldModule,
    MatGridListModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatDatepickerModule,
    MatCheckboxModule,
    MatIconModule,
    AngularEditorModule
  ],
})
export class EnterScholarshipModule {}
