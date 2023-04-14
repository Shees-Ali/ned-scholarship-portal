import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AllstudentsPage } from './allstudents.page';
const routes: Routes = [{ path: '', component:AllstudentsPage}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AllstudentsRoutingModule { }
