import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StudentslistPage } from './studentslist.page';
const routes: Routes = [{ path: '', component:StudentslistPage}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentslistRoutingModule { }
