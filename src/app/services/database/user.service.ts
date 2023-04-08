import { Injectable } from '@angular/core';
import { FirebaseService } from './firebase.service';
import { AuthService } from '../auth.service';
import { StorageService } from '../storage.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
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

  getCurrentUser() {
    return new Promise<any>(async (resolve) => {
      const string = await this.storage.get('user');
      const res = JSON.parse(string);
      const user = await this.getUserData(res?.uid);
      resolve(user);
    });
  }
}
