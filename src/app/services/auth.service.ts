import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import {
  Auth,
  User,
  UserCredential,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
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
        this.storage.set('user', JSON.stringify(user));
        this.user = user;
      }
    });
  }

  signIn(email: string, password: string) {
    return new Promise<any>((resolve, reject) => {
      signInWithEmailAndPassword(this.auth, email, password)
        .then((userCredential) => {
          this.user = userCredential.user;
          this.storage.set('user', JSON.stringify(this.user));
          resolve(this.user);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  signUp(obj: any) {
    const email = obj.email;
    const password = obj.password;
    return new Promise<any>((resolve, reject) => {
      createUserWithEmailAndPassword(this.auth, email, password)
        .then((userCredential) => {
          this.user = userCredential.user;
          this.storage.set('user', JSON.stringify(this.user));
          this.updateUserDetails(this.user, obj);
          resolve(this.user);
        })
        .catch((error) => {
          console.error(error);
          reject(error);
        });
    });
  }

  updateUserDetails(user: any, obj: any) {
    return new Promise<any>(async (resolve) => {
      let db_obj = {
        last_name: obj['last_name'],
        first_name: obj['first_name'],
        role: 'student',
        user_id: user.uid,
        email: user.email,
        emailVerified: user.emailVerified,
        photoURL: user.photoURL,
      };
      user.displayName = obj['first_name'] + ' ' + obj['last_name'];
      await this.auth.updateCurrentUser(user);
      this.storage.set('user_obj', JSON.stringify(db_obj));
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

  async logOut() {
    signOut(this.auth);
    await this.storage.set('user', '');
    await this.storage.set('user_obj', '');
    this.nav.navigateFromRoot('authentication');
  }

  sendResendPassEmail() {
    
  }
}
