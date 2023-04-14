import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnterScholarshipComponent } from './enter-scholarship.page';

const routes: Routes = [{ path: '', component:EnterScholarshipComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EnterScholarshipRoutingRoutingModule { }
