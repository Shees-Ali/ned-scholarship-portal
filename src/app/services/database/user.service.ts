import { Injectable } from '@angular/core';
import { FirebaseService } from './firebase.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private firebase: FirebaseService) {}

  setUserData(user_id: string, user: any) {
    return this.firebase.setData('users/' + user_id, user);
  }

  getUserData(user_id: string) {

  }
}
