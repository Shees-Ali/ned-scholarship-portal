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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudentRoutingModule {}
