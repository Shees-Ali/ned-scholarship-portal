import { Component } from '@angular/core';

//All of this will be replaced with Firebase once we integrate it
export interface ApplicationList {
  id: number;
  type: string;
  date: string;
  app_status: string;
  view: string;
  download: string;
}

const DEPENDENTS_DATA: ApplicationList[] = [
  {id: 1231, type:'scholarship' , date: '10/10/10' , app_status: 'under-review', view:'view/edit', download:'download'},
  {id: 2311, type:'scholarship' , date: '10/10/10' , app_status: 'under-review', view:'view/edit', download:'download'},
]

const COLUMNS_SCHEMA = [
  {
    key: "id",
    type: "number",
    label: "Application ID"
},
  {
      key: "type",
      type: "text",
      label: "Type"
  },
  {
    key: "date",
    type: "text",
    label: "Date"
  },
  {
    key: "app_status",
    type: "string",
    label: "Application Status"
  },
  {
      key: "view",
      type: "text",
      label: "View/Edit"
  },
  {
      key: "download",
      type: "text",
      label: "Download"
  }
]

@Component({
  selector: 'my-applications-list',
  templateUrl: './my-applications-list.component.html',
  styleUrls: ['./my-applications-list.component.scss']
})
export class MyApplicationsListComponent {
  displayedColumns: string[] = ['id', 'type', 'date', 'app_status', 'view', 'download'];
  dataSource: any = DEPENDENTS_DATA;
  columnsSchema: any = COLUMNS_SCHEMA;
}
