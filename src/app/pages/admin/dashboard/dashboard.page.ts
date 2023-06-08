import { Component, Injector, OnInit } from '@angular/core';
import { BasePage } from 'src/app/base/base.page';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage extends BasePage implements OnInit {
  constructor(injector: Injector,) {
    super(injector);
  }

  ngOnInit() {
    this.utiltiy.isPages.next(true);
  }

  to_enter_scholarship(){
    this.nav.navigateTo('admin/enter-scholarship');
  }

  to_view_scholarships(){
    this.nav.navigateTo('admin/scholarships');
  }

  to_view_students(){
    this.nav.navigateTo('admin/allstudents');
  }
  to_donors_list(){
    this.nav.navigateTo('admin/donor-list');
  }
}
