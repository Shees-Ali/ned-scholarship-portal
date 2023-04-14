import { Component, Injector, OnInit } from '@angular/core';
import { BasePage } from 'src/app/base/base.page';

@Component({
  selector: 'app-allstudents',
  templateUrl: './allstudents.page.html',
  styleUrls: ['./allstudents.page.scss']
})
export class AllstudentsPage extends BasePage implements OnInit {
  constructor(injector: Injector,) {
    super(injector);
  }
  
  ngOnInit() {
    this.utiltiy.isPages.next(true);
  }
}
