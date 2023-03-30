import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationPage } from './authentication.page';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [AuthenticationPage],
  imports: [CommonModule, AuthenticationRoutingModule, MatButtonModule],
})
export class AuthenticationModule {}
