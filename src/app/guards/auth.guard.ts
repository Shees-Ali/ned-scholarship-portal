import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';
import { AuthService } from '../services/auth.service';
import { StorageService } from '../services/storage.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard {
  constructor(
    private auth: AuthService,
    private router: Router,
    private storage: StorageService
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<boolean | void> {
    return this.storage.get('user').then((res) => {
      if (!res) {
        this.router.navigate(['/authentication']);
      }
    });
  }
}
