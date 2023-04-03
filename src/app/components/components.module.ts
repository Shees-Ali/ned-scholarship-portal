import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { SideNavComponent } from './side-nav/side-nav.component';
import { ToolbarComponent } from './toolbar/toolbar.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterModule } from '@angular/router';
import { TopBannerComponent } from './top-banner/top-banner.component';
import { ScholarshipCardComponent } from './scholarship-card/scholarship-card.component';

@NgModule({
  declarations: [
    SideNavComponent,
    ToolbarComponent,
    TopBannerComponent,
    ScholarshipCardComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatTooltipModule,
  ],
  exports: [
    SideNavComponent,
    ToolbarComponent,
    TopBannerComponent,
    ScholarshipCardComponent,
  ],
})
export class ComponentsModule {}
