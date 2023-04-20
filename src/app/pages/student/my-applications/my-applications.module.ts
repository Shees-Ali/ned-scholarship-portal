import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyApplicationsPage } from './my-applications.page';
import { MyApplicationsRoutingModule } from './my-applications-routing.module';
import { ComponentsModule } from 'src/app/components/components.module';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [MyApplicationsPage],
  imports: [CommonModule, MyApplicationsRoutingModule, ComponentsModule, MatFormFieldModule, MatIconModule, MatButtonModule],
})
export class MyApplicationsModule {}