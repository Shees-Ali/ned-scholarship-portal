import { Component, OnInit } from '@angular/core';
declare var Tawk_API: any;

@Component({
  selector: 'app-chat-widget',
  template: '',
})
export class ChatWidgetComponent implements OnInit {
  constructor() { }
  ngOnInit() {
    Tawk_API.init();
  }
}

