import { Component, Injector, Input } from '@angular/core';
import { BasePage } from 'src/app/base/base.page';

@Component({
  selector: 'third-scholarship-page',
  templateUrl: './third-scholarship-page.component.html',
  styleUrls: ['./third-scholarship-page.component.scss'],
})
export class ThirdScholarshipPageComponent extends BasePage {
  @Input('scholarship') scholarship: any;

  constructor(injector: Injector) {
    super(injector);
  }
}
