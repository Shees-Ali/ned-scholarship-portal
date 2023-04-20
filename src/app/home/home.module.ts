import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePage } from './home.page';
import { HomeRoutingModule } from './home-routing.module';
import { FaqPageComponent } from './faq-page/faq-page.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { AboutFooterComponent } from './about-footer/about-footer.component';
import { ImageCarouselComponent } from './image-carousel/image-carousel.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { ComponentsModule } from '../components/components.module';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { Ng2SearchPipeModule } from 'ng2-search-filter';


@NgModule({
  declarations: [
    HomePage,
    FaqPageComponent,
    FeedbackComponent,
    AboutFooterComponent,
    ImageCarouselComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatPaginatorModule,
    MatInputModule,
    MatIconModule,
    FormsModule,
    MatRadioModule,
    MatGridListModule,
    ComponentsModule,
    MatButtonModule,
    Ng2SearchPipeModule
  ],
})
export class HomeModule {}
