import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StudentPage } from './student.page';
const routes: Routes = [{ path: '', component:StudentPage}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
