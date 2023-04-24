import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScholarshipsPage } from './scholarships.page';
import { ScholarshipsRoutingModule } from './scholarships-routing.module';
import { ComponentsModule } from 'src/app/components/components.module';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [ScholarshipsPage],
  imports: [
    CommonModule,
    FormsModule,
    ScholarshipsRoutingModule,
    ComponentsModule,
    MatButtonModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatIconModule,
    MatRadioModule,
  ],
})
export class ScholarshipsModule {}
