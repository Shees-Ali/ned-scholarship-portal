import { Injectable } from '@angular/core';
import { FirebaseService } from './firebase.service';
import { AuthService } from '../auth.service';
import { StorageService } from '../storage.service';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  userUpdated = new Subject<void>();
  constructor(
    private firebase: FirebaseService,
    private storage: StorageService
  ) {}

  setUserData(user_id: string, user: any) {
    return this.firebase.setData('users/' + user_id, user);
  }

  getUserData(user_id: string | undefined) {
    return this.firebase.getDataOnValue('users/' + user_id);
  }

  updateUser(user_id: string | undefined, update: any) {
    return this.firebase.updateData('users/' + user_id, update);
  }

  getCurrentUser() {
    return new Promise<any>(async (resolve) => {
      const string = await this.storage.get('user');
      const res = JSON.parse(string);
      const user = await this.getUserData(res?.uid);
      resolve(user);
    });
  }

  countUsers() {
    return this.firebase.countData('users');
  }
}
