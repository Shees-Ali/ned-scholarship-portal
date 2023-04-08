import { Component, Injector } from '@angular/core';
import { BasePage } from 'src/app/base/base.page';

@Component({
  selector: 'app-scholarships',
  templateUrl: './scholarships.page.html',
  styleUrls: ['./scholarships.page.scss'],
})
export class ScholarshipsPage extends BasePage {
  constructor(injector: Injector) {
    super(injector);
    this.utiltiy.isPages.next(true);
  }
}
