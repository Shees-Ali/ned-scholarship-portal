import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DonorlistPage } from './donorlist.page';
const routes: Routes = [
  { path: '', component: DonorlistPage },
  {
    path: 'donor',
    loadChildren: () =>
      import('./donor/donor.module').then((m) => m.DonorModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DonorlistRoutingModule {}
