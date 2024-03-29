import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplicantListComponent } from './applicant-list.page';

const routes: Routes = [{ path: '', component:ApplicantListComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApplicantListRoutingRoutingModule { }
