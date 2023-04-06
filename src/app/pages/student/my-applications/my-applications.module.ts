import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyApplicationsPage } from './my-applications.page';
import { MyApplicationsRoutingModule } from './my-applications-routing.module';
import { ComponentsModule } from 'src/app/components/components.module';
import {MatFormFieldModule} from '@angular/material/form-field';

@NgModule({
  declarations: [MyApplicationsPage],
  imports: [CommonModule, MyApplicationsRoutingModule, ComponentsModule, MatFormFieldModule],
})
export class MyApplicationsModule {}
