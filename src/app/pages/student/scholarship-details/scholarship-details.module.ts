import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScholarshipDetailsPage } from './scholarship-details.page';
import { ScholarshipDetailsRoutingModule } from './scholarship-details-routing.module';

@NgModule({
  declarations: [ScholarshipDetailsPage],
  imports: [CommonModule, ScholarshipDetailsRoutingModule],
})
export class ScholarshipDetailsModule {}
