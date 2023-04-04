import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationPage } from './authentication.page';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AuthenticationPage],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatGridListModule,
    MatFormFieldModule,
    ReactiveFormsModule
  ],
})
export class AuthenticationModule {}
