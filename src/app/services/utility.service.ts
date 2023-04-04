import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UtilityService {
  isTabberVisible = new Subject<boolean>();
  isSideNavVisible = new Subject<boolean>();
  isAuthenticationPage = new Subject<boolean>();

  constructor() {}
}
