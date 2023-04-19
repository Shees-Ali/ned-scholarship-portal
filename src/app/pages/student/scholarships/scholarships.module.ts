import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScholarshipsPage } from './scholarships.page';
import { ScholarshipsRoutingModule } from './scholarships-routing.module';
import { ComponentsModule } from 'src/app/components/components.module';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';

@NgModule({
  declarations: [ScholarshipsPage],
  imports: [
    CommonModule,
    ScholarshipsRoutingModule,
    ComponentsModule,
    MatPaginatorModule,
    MatInputModule,
    MatIconModule,
    FormsModule,
    MatRadioModule,
  ],
})
export class ScholarshipsModule {}
