import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProfileCompletionPage } from './profile-completion.page';

const routes: Routes = [{ path: '', component: ProfileCompletionPage }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileCompletionRoutingModule {}
