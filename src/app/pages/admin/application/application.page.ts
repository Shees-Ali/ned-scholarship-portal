import { Component, Injector, OnInit } from '@angular/core';
import { BasePage } from 'src/app/base/base.page';

@Component({
  selector: 'app-application',
  templateUrl: './application.page.html',
  styleUrls: ['./application.page.scss']
})

export class ApplicationPage extends BasePage implements OnInit {
  constructor(injector: Injector,) {
    super(injector);
  }
  ngOnInit() {
    this.utiltiy.isPages.next(true);
  }
}