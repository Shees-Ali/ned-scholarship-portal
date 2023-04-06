import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ScholarshipDetailsPage } from './scholarship-details.page';
const routes: Routes = [{ path: '', component: ScholarshipDetailsPage }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ScholarshipDetailsRoutingModule {}
