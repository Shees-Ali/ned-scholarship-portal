import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPage } from './main.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { MainRoutingModule } from './main-routing.module';

@NgModule({
  declarations: [MainPage],
  imports: [CommonModule, MainRoutingModule, ComponentsModule],
})
export class MainModule {}
