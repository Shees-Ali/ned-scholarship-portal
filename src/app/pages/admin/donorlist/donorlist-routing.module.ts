import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DonorlistPage } from './donorlist.page';
const routes: Routes = [{ path: '', component:DonorlistPage}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DonorlistRoutingModule { }
