import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from '../guards/admin.guard';
import { StudentGuard } from '../guards/student.guard';
// import { DonorGuard } from '../guards/donor.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'student',
    pathMatch: 'full',
  },
  {
    path: 'student',
    loadChildren: () =>
      import('./student/student.module').then((m) => m.StudentModule),
    canActivate: [StudentGuard],
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./admin/admin.module').then((m) => m.AdminModule),
    canActivate: [AdminGuard],
  },
  {
    path: 'donor',
    loadChildren: () =>
      import('./donor/donor.module').then((m) => m.DonorModule),
    // canActivate: [DonorGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
