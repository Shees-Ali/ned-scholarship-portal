import { Injectable, inject } from '@angular/core';
import { Subject } from 'rxjs';
import {
  Auth,
  User,
  UserCredential,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from '@angular/fire/auth';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoggedIn = new Subject<boolean>();
  userCredential: UserCredential | undefined;
  user: User | undefined;

  constructor(private auth: Auth, private storage: StorageService) {
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
    return new Promise<any>((resolve) => {
      createUserWithEmailAndPassword(this.auth, email, password)
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

  updateUserDetails(user: any) {
    return new Promise<any>((resolve) => {});
  }

  getUser() {
    return new Promise<any>(async (resolve) => {
      if (this.user) {
        resolve(this.user);
      } else {
        const user = await this.storage.get('user');
        console.log(user);
        this.user = JSON.parse(user);
        resolve(this.user);
      }
    });
  }
}
