import { Component, Injector, OnInit } from '@angular/core';
import { BasePage } from 'src/app/base/base.page';

@Component({
  selector: 'app-donor',
  templateUrl: './donor.page.html',
  styleUrls: ['./donor.page.scss'],
})
export class DonorPage extends BasePage implements OnInit {
  constructor(injector: Injector) {
    super(injector);
  }

  ngOnInit() {
    this.utiltiy.isPages.next(true);
  }
}
