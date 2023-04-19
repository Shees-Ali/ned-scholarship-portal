import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnterScholarshipComponent } from './enter-scholarship.page';
import { EnterScholarshipRoutingRoutingModule } from './enter-scholarship-routing.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';

@NgModule({
  declarations: [EnterScholarshipComponent],
  imports: [
    CommonModule,
    EnterScholarshipRoutingRoutingModule,
    MatFormFieldModule,
    MatGridListModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatDatepickerModule,
  ],
})
export class EnterScholarshipModule {}
