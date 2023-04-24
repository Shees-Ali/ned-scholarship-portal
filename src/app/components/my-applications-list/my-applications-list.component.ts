import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'my-applications-list',
  templateUrl: './my-applications-list.component.html',
  styleUrls: ['./my-applications-list.component.scss'],
})
export class MyApplicationsListComponent implements OnInit {
  @Input('application_list') application_list?: Array<any>;

  ngOnInit() {
    console.log(this.application_list);
  }
}
