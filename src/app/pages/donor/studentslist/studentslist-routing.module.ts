import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StudentslistPage } from './studentslist.page';
const routes: Routes = [
  { path: '', component: StudentslistPage },
  {
    path: 'student',
    loadChildren: () =>
      import('./student/student.module').then((m) => m.StudentModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudentslistRoutingModule {}
