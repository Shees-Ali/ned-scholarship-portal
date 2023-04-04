import { Component, Injector, OnInit } from '@angular/core';
import { BasePage } from '../base/base.page';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage extends BasePage implements OnInit {
  constructor(injector: Injector) {
    super(injector);
  }

  ngOnInit() {
    this.utiltiy.isHome.next(true);
  }
}
