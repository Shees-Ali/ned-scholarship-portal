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
import { MyApplicationsListComponent } from './my-applications-list/my-applications-list.component';
import { MatTableModule } from '@angular/material/table';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';
import { ScreenLoaderComponent } from './screen-loader/screen-loader.component';
import { DragDropDirective } from '../directives/drag-drop.directive';
import { SpinnerComponent } from './spinner/spinner.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@NgModule({
  declarations: [
    SideNavComponent,
    ToolbarComponent,
    TopBannerComponent,
    ScholarshipCardComponent,
    MyApplicationsListComponent,
    ConfirmationDialogComponent,
    ScreenLoaderComponent,
    DragDropDirective,
    SpinnerComponent,
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
    MatTableModule,
    MatGridListModule,
    MatPaginatorModule,
    MatDialogModule,
    MatProgressBarModule
  ],
  exports: [
    SideNavComponent,
    ToolbarComponent,
    TopBannerComponent,
    ScholarshipCardComponent,
    MyApplicationsListComponent,
    ScreenLoaderComponent,
    DragDropDirective,
    SpinnerComponent
  ],
})
export class ComponentsModule {}
