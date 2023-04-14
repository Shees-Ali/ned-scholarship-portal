import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
  },
  {
    path: 'enter-scholarship',
    loadChildren: () =>
      import('./enter-scholarship/enter-scholarship.module').then(
        (m) => m.EnterScholarshipModule
      ),
  },
  {
    path: 'scholarships',
    loadChildren: () =>
      import('./scholarships/scholarships.module').then((m) => m.ScholarshipsModule),
  },
  {
    path: 'allstudents',
    loadChildren: () =>
      import('./allstudents/allstudents.module').then((m) => m.AllstudentsModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
