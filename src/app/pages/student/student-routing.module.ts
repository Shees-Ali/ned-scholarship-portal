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
    path: 'profile-completion',
    loadChildren: () =>
      import('./profile-completion/profile-completion.module').then(
        (m) => m.ProfileCompletionModule
      ),
  },
  {
    path: 'scholarships',
    loadChildren: () =>
      import('./scholarships/scholarships.module').then(
        (m) => m.ScholarshipsModule
      ),
  },
  {
    path: 'my-applications',
    loadChildren: () =>
      import('./my-applications/my-applications.module').then(
        (m) => m.MyApplicationsModule
      ),
  },
  {
    path: 'scholarship-details',
    loadChildren: () =>
      import('./scholarship-details/scholarship-details.module').then(
        (m) => m.ScholarshipDetailsModule
      ),
  },
  {
    path: 'scholarship-details',
    loadChildren: () =>
      import('./scholarship-details/scholarship-details.module').then(
        (m) => m.ScholarshipDetailsModule
      ),
  },
  {
    path: 'application',
    loadChildren: () =>
      import('../admin/application/application.module').then((m) => m.ApplicationModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudentRoutingModule {}
