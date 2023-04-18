import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePage } from './home.page';
import { HomeRoutingModule } from './home-routing.module';
import { FaqPageComponent } from './faq-page/faq-page.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { AboutFooterComponent } from './about-footer/about-footer.component';
import { ImageCarouselComponent } from './image-carousel/image-carousel.component';
import { MatInputModule } from '@angular/material/input';



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
    HomeRoutingModule
  ]
})
export class HomeModule { }
