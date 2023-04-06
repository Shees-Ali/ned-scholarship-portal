import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyApplicationsPage } from './my-applications.page';
import { MyApplicationsRoutingModule } from './my-applications-routing.module';

@NgModule({
  declarations: [MyApplicationsPage],
  imports: [CommonModule, MyApplicationsRoutingModule],
})
export class MyApplicationsModule {}
