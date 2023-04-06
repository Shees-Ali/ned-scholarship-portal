import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import {
  Auth,
  User,
  UserCredential,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from '@angular/fire/auth';
import { StorageService } from './storage.service';
import { UserService } from './database/user.service';
import { NavService } from './nav.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoggedIn = new Subject<boolean>();
  userCredential: UserCredential | undefined;
  user: User | undefined;

  constructor(
    private auth: Auth,
    private storage: StorageService,
    private userService: UserService,
    private nav: NavService
  ) {
    this.auth.onAuthStateChanged((user) => {
      if (user != null) {
        this.user = user;
      }
    });
  }

  signIn(email: string, password: string) {
    return new Promise<any>((resolve) => {
      signInWithEmailAndPassword(this.auth, email, password)
        .then((userCredential) => {
          this.user = userCredential.user;
          this.storage.set('user', JSON.stringify(this.user));
          resolve(this.user);
        })
        .catch((error) => {
          console.error(error);
        });
    });
  }

  signUp(obj: any) {
    const email = obj.email;
    const password = obj.password;
    console.log(email);
    console.log(password);
    return new Promise<any>((resolve) => {
      createUserWithEmailAndPassword(this.auth, email, password)
        .then((userCredential) => {
          this.user = userCredential.user;
          this.storage.set('user', JSON.stringify(this.user));
          this.updateUserDetails(this.user, obj);
          resolve(this.user);
        })
        .catch((error) => {
          console.error(error);
        });
    });
  }

  updateUserDetails(user: any, obj: any) {
    return new Promise<any>((resolve) => {
      let db_obj = {
        last_name: obj['last_name'],
        first_name: obj['first_name'],
        role: 'student',
        user_id: user.uid,
        email: user.email,
        emailVerified: user.emailVerified,
      };
      this.userService.setUserData(user.uid, db_obj).then(() => {
        console.log('Success !!!');
      });
    });
  }

  getUser() {
    return new Promise<any>(async (resolve) => {
      if (this.user) {
        resolve(this.user);
      } else {
        const user = await this.storage.get('user');
        this.user = JSON.parse(user);
        resolve(this.user);
      }
    });
  }

  logOut() {
    this.storage.set('user', null);
    this.nav.navigateFromRoot('authentication');
  }
}
