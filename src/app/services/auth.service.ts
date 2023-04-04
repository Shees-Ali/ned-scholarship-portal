import { Injectable, inject } from '@angular/core';
import { Subject } from 'rxjs';
import {
  Auth,
  UserCredential,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from '@angular/fire/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoggedIn = new Subject<boolean>();
  user: UserCredential | undefined;

  constructor(private auth: Auth) {}

  signIn(email: string, password: string) {
    return new Promise<any>((resolve) => {
      signInWithEmailAndPassword(this.auth, email, password)
        .then((res) => {
          this.user = res;
          resolve(this.user);
        })
        .catch((error) => {
          console.error(error);
        });
    });
  }

  signUp(email: string, password: string) {
    return new Promise<any>((resolve) => {
      createUserWithEmailAndPassword(this.auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          resolve(user);
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
    return new Promise<any>((resolve) => {
      resolve(this.auth.currentUser);
    });
  }
}
