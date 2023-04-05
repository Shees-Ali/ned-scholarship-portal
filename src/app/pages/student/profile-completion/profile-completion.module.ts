import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileCompletionPage } from './profile-completion.page';
import { ProfileCompletionRoutingModule } from './profile-completion-routing.module';
import { FirstFormPageComponent } from './first-form-page/first-form-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { SecondFormPageComponent } from './second-form-page/second-form-page.component';
import { ThirdFormPageComponent } from './third-form-page/third-form-page.component';
import { VerifyComponent } from './verify/verify.component';
import { FourthFormPageComponent } from './fourth-form-page/fourth-form-page.component';
import { MatTableModule } from '@angular/material/table';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ProfileCompletionPage,
    FirstFormPageComponent,
    SecondFormPageComponent,
    ThirdFormPageComponent,
    VerifyComponent,
    FourthFormPageComponent,
  ],
  imports: [
    CommonModule,
    ProfileCompletionRoutingModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatGridListModule,
    MatTableModule,
    FormsModule
  ],
})
export class ProfileCompletionModule {}
