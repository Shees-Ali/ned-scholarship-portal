import { Component, Input } from '@angular/core';

@Component({
  selector: 'top-banner',
  templateUrl: './top-banner.component.html',
  styleUrls: ['./top-banner.component.scss'],
})
export class TopBannerComponent {
  @Input('text') text: string = 'Welcome John Doe';
}
