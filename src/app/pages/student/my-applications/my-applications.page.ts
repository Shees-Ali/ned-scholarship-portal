import { Component, OnInit, Injector } from '@angular/core';
import { BasePage } from 'src/app/base/base.page';
@Component({
  selector: 'app-my-applications',
  templateUrl: './my-applications.page.html',
  styleUrls: ['./my-applications.page.scss'],
})
export class MyApplicationsPage extends BasePage implements OnInit {
  
  constructor(injector: Injector) {
    super(injector);
  }

  ngOnInit(): void {}
}
