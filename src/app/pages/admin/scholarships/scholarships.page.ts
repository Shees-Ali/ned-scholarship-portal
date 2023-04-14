import { Component, Injector, OnInit } from '@angular/core';
import { BasePage } from 'src/app/base/base.page';

@Component({
  selector: 'app-scholarships',
  templateUrl: './scholarships.page.html',
  styleUrls: ['./scholarships.page.scss']
})
export class ScholarshipsPage extends BasePage implements OnInit {
  constructor(injector: Injector,) {
    super(injector);
  }
  
  ngOnInit() {
    this.utiltiy.isPages.next(true);
  }
}
