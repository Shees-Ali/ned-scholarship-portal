import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UtilityService {
  isPages = new Subject<boolean>();
  isHome = new Subject<boolean>();
  isAuthenticationPage = new Subject<boolean>();
  isloading = new Subject<boolean>

  constructor() {}
  
  setLoading(loading: boolean) {
    loading = false
  }
}
