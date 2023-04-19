import { Component, Injector, Input } from '@angular/core';
import { BasePage } from 'src/app/base/base.page';

@Component({
  selector: 'second-scholarship-page',
  templateUrl: './second-scholarship-page.component.html',
  styleUrls: ['./second-scholarship-page.component.scss']
})
export class SecondScholarshipPageComponent extends BasePage {
  @Input('scholarship') scholarship: any;

  constructor(injector: Injector) {
    super(injector);
  }
}