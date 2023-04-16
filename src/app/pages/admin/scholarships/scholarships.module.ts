import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScholarshipsPage } from './scholarships.page';
import { ScholarshipsRoutingModule } from './scholarships-routing.module';
import { ComponentsModule } from 'src/app/components/components.module';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  declarations: [ScholarshipsPage],
  imports: [
    CommonModule,
    ScholarshipsRoutingModule,
    ComponentsModule,
    MatPaginatorModule,
  ],
})
export class ScholarshipsModule {}
